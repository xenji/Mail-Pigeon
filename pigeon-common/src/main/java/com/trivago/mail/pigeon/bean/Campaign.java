package com.trivago.mail.pigeon.bean;

import com.trivago.mail.pigeon.storage.ConnectionFactory;
import com.trivago.mail.pigeon.storage.IndexTypes;
import com.trivago.mail.pigeon.storage.RelationTypes;
import org.neo4j.graphdb.Node;
import org.neo4j.graphdb.Transaction;
import org.neo4j.graphdb.index.IndexHits;

import java.util.Date;

public class Campaign extends AbstractBean
{
	public static final String ID = "campaign_id";
	public static final String DATE = "send_date";
	public static final String TITLE = "title";
	public static final String URL_PARAM = "url_param";

	public Campaign(final Node underlayingNode)
	{
		this.dataNode = underlayingNode;
	}

	public Campaign(final long campaignId)
	{
		dataNode = ConnectionFactory.getCampaignIndex().get(IndexTypes.CAMPAIGN_ID, campaignId).getSingle();
	}

	public Campaign(final long campaignId, final String urlParams, final Date creationDate, final String campaignTitle)
	{
		Transaction tx = ConnectionFactory.getDatabase().beginTx();
		try
		{
			dataNode = ConnectionFactory.getDatabase().createNode();
			dataNode.setProperty(ID, campaignId);
			dataNode.setProperty("type", getClass().getName());
			dataNode.setProperty(DATE, creationDate.getTime());
			dataNode.setProperty(TITLE, campaignTitle);
			dataNode.setProperty(URL_PARAM, urlParams);
			ConnectionFactory.getNewsletterIndex().add(this.dataNode, IndexTypes.CAMPAIGN_ID, campaignId);
			ConnectionFactory.getNewsletterIndex().add(this.dataNode, IndexTypes.TYPE, getClass().getName());
			ConnectionFactory.getDatabase().getReferenceNode().createRelationshipTo(dataNode, RelationTypes.CAMPAIGN_REFERENCE);
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
		return (Long) dataNode.getProperty(ID);
	}

	public Date getCreationDate()
	{
		return  new Date((Long) dataNode.getProperty(DATE));
	}
	
	public void setCreationDate(final Date creationDate)
	{
		writeProperty(DATE, creationDate.getTime());
	}

	public String getTitle()
	{
		return (String) dataNode.getProperty(TITLE);
	}
	
	public void setTitle(final String title)
	{
		writeProperty(TITLE, title);
	}
	
	public Node getDataNode()
	{
		return this.dataNode;
	}

	public String getUrlParams()
	{
		return (String) this.dataNode.getProperty(URL_PARAM);
	}
	
	public void setUrlParams(final String urlParams)
	{
		writeProperty(URL_PARAM, urlParams);
	}
	
	public static IndexHits<Node> getAll()
	{
		return ConnectionFactory.getCampaignIndex().get("type", Campaign.class.getName());
	}
}