/**
 * Copyright (C) 2011-2012 trivago GmbH <mario.mueller@trivago.com>, <christian.krause@trivago.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.trivago.mail.pigeon.bean;


import com.trivago.mail.pigeon.storage.ConnectionFactory;
import com.trivago.mail.pigeon.storage.IndexTypes;
import com.trivago.mail.pigeon.storage.RelationTypes;
import org.neo4j.graphdb.Node;
import org.neo4j.graphdb.Relationship;
import org.neo4j.graphdb.Transaction;
import org.neo4j.graphdb.index.IndexHits;

import java.util.Date;

/**
 *
 * @author Mario Mueller mario.mueller@trivago.com
 */
public class Tag extends AbstractBean
{
	public static final String ID = "tag_id";
	public static final String DATE = "creation_date";
	public static final String NAME = "name";

	public Tag(final Node underlayingNode)
	{
		this.dataNode = underlayingNode;
	}

	public Tag(final long tagId)
	{
		dataNode = ConnectionFactory.getTagIndex().get(IndexTypes.TAG_ID, tagId).getSingle();
	}

	public Tag(final long tagId, final Date creationDate, final String tagName)
	{
		Transaction tx = ConnectionFactory.getDatabase().beginTx();
		try
		{
			dataNode = ConnectionFactory.getDatabase().createNode();
			writeProperty(ID, tagId);
			writeProperty("type", getClass().getName());
			writeProperty(DATE, creationDate.getTime());
			writeProperty(NAME, tagName);
			ConnectionFactory.getNewsletterIndex().add(this.dataNode, IndexTypes.TAG_ID, tagId);
			ConnectionFactory.getNewsletterIndex().add(this.dataNode, IndexTypes.TYPE, getClass().getName());
			ConnectionFactory.getDatabase().getReferenceNode().createRelationshipTo(dataNode, RelationTypes.TAG_REFERENCE);
			tx.success();
		}
		catch (Exception e)
		{
			tx.failure();
		}
		finally
		{
			tx.finish();
		}
	}

	public long getId()
	{
		return getProperty(Long.class, ID, false);
	}

	public Date getCreationDate()
	{
		return getWrappedProperty(Date.class, Long.class, DATE);
	}

	public String getName()
	{
		return getProperty(String.class, NAME);
	}

	public void setName(String name)
	{
		writeProperty(NAME, name);
	}

	public Node getDataNode()
	{
		return this.dataNode;
	}

	public static IndexHits<Node> getAll()
	{
		return ConnectionFactory.getTagIndex().get("type", Tag.class.getName());
	}

	public Relationship tagContent(final Node taggableNode)
	{
		Transaction tx = ConnectionFactory.getDatabase().beginTx();
		Relationship relation = null;
		try
		{
			relation = dataNode.createRelationshipTo(taggableNode, RelationTypes.TAGGED);
			relation.setProperty(DATE, new Date().getTime());
			tx.success();
		}
		catch (Exception e)
		{
			tx.failure();
		}
		finally
		{
			tx.finish();
		}
		return relation;
	}
}
