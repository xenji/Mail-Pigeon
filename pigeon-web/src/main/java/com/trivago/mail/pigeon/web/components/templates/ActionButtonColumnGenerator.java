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
package com.trivago.mail.pigeon.web.components.templates;

import com.trivago.mail.pigeon.bean.MailTemplate;
import com.trivago.mail.pigeon.storage.ConnectionFactory;
import com.vaadin.terminal.ThemeResource;
import com.vaadin.ui.Button;
import com.vaadin.ui.HorizontalLayout;
import com.vaadin.ui.Table;
import com.vaadin.ui.Window;
import org.apache.log4j.Logger;
import org.neo4j.graphdb.Relationship;
import org.neo4j.graphdb.Transaction;


public class ActionButtonColumnGenerator implements Table.ColumnGenerator
{
	private final Logger log = Logger.getLogger(ActionButtonColumnGenerator.class);

	@Override
	public Object generateCell(final Table source, final Object itemId, final Object columnId)
	{
		HorizontalLayout hl = new HorizontalLayout();

        Button deleteButton = new Button();
		deleteButton.setImmediate(true);
		deleteButton.setIcon(new ThemeResource("../runo/icons/16/trash.png"));
		deleteButton.setDescription("Delete template");
		deleteButton.addListener(new Button.ClickListener()
		{
			@Override
			public void buttonClick(Button.ClickEvent event)
			{
				Transaction tx = ConnectionFactory.getDatabase().beginTx();
				try
				{
                    MailTemplate mt = new MailTemplate((Long) itemId);
					ConnectionFactory.getNewsletterIndex().remove(mt.getDataNode());

					for (Relationship r : mt.getDataNode().getRelationships())
					{
						r.delete();
					}
					mt.getDataNode().delete();

					source.removeItem(itemId);
					source.getWindow().showNotification("Successfully deleted.");
					tx.success();
				}
				catch (Exception e)
				{
					source.getWindow().showNotification("Error while deleting entry: " + e.getMessage(), Window.Notification.TYPE_ERROR_MESSAGE);
					log.error(e);
					tx.failure();
				}
				finally
				{
					tx.finish();
				}
			}
		});

        Button editButton = new Button();
        editButton.setImmediate(true);
        editButton.setIcon(new ThemeResource("../runo/icons/16/document-txt.png"));
        editButton.setDescription("Edit template");
        editButton.addListener(new Button.ClickListener(){
            @Override
            public void buttonClick(Button.ClickEvent event) {
                Window modalNewWindow = new ModalAddTemplate((TemplateList) source.getParent().getParent().getParent(), (Long) itemId);
				event.getButton().getWindow().addWindow(modalNewWindow);
				modalNewWindow.setVisible(true);
            }
        });

        hl.addComponent(editButton);
		hl.addComponent(deleteButton);
		return hl;
	}
}
