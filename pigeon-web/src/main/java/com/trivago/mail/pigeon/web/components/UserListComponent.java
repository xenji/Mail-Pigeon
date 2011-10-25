package com.trivago.mail.pigeon.web.components;

import com.vaadin.annotations.AutoGenerated;
import com.vaadin.ui.AbsoluteLayout;
import com.vaadin.ui.CustomComponent;
import com.vaadin.ui.HorizontalLayout;
import com.vaadin.ui.Label;
import com.vaadin.ui.Table;
import com.vaadin.ui.VerticalLayout;

public class UserListComponent extends CustomComponent
{

	@AutoGenerated
	private AbsoluteLayout mainLayout;

	@AutoGenerated
	private VerticalLayout verticalLayout_1;

	@AutoGenerated
	private HorizontalLayout horizontalLayout_1;

	@AutoGenerated
	private Label UserStatsLabel;

	@AutoGenerated
	private Table UserTable;

	@AutoGenerated
	private Label UserListLabel;

	/*- VaadinEditorProperties={"grid":"RegularGrid,20","showGrid":true,"snapToGrid":true,"snapToObject":true,"movingGuides":false,"snappingDistance":10} */

	

	/*- VaadinEditorProperties={"grid":"RegularGrid,20","showGrid":true,"snapToGrid":true,"snapToObject":true,"movingGuides":false,"snappingDistance":10} */

	

	/*- VaadinEditorProperties={"grid":"RegularGrid,20","showGrid":true,"snapToGrid":true,"snapToObject":true,"movingGuides":false,"snappingDistance":10} */

	/**
	 * 
	 */
	private static final long serialVersionUID = -9191995407209233448L;
	
	/**
	 * The constructor should first build the main layout, set the
	 * composition root and then do any custom initialization.
	 *
	 * The constructor will not be automatically regenerated by the
	 * visual editor.
	 */
	public UserListComponent()
	{
		buildMainLayout();
		setCompositionRoot(mainLayout);

		// TODO add user code here
	}

	@AutoGenerated
	private AbsoluteLayout buildMainLayout()
	{
		// common part: create layout
		mainLayout = new AbsoluteLayout();
		mainLayout.setImmediate(false);
		mainLayout.setWidth("100%");
		mainLayout.setHeight("100%");
		mainLayout.setMargin(false);
		
		// top-level component properties
		setWidth("100.0%");
		setHeight("100.0%");
		
		// verticalLayout_1
		verticalLayout_1 = buildVerticalLayout_1();
		mainLayout.addComponent(verticalLayout_1, "top:0.0px;left:0.0px;");
		
		return mainLayout;
	}

	@AutoGenerated
	private VerticalLayout buildVerticalLayout_1()
	{
		// common part: create layout
		verticalLayout_1 = new VerticalLayout();
		verticalLayout_1.setImmediate(false);
		verticalLayout_1.setWidth("-1px");
		verticalLayout_1.setHeight("-1px");
		verticalLayout_1.setMargin(false);
		
		// UserListLabel
		UserListLabel = new Label();
		UserListLabel.setImmediate(false);
		UserListLabel.setWidth("-1px");
		UserListLabel.setHeight("-1px");
		UserListLabel.setValue("User List");
		verticalLayout_1.addComponent(UserListLabel);
		
		// UserTable
		UserTable = new Table();
		UserTable.setImmediate(false);
		UserTable.setWidth("-1px");
		UserTable.setHeight("-1px");
		verticalLayout_1.addComponent(UserTable);
		
		// horizontalLayout_1
		horizontalLayout_1 = buildHorizontalLayout_1();
		verticalLayout_1.addComponent(horizontalLayout_1);
		
		return verticalLayout_1;
	}

	@AutoGenerated
	private HorizontalLayout buildHorizontalLayout_1()
	{
		// common part: create layout
		horizontalLayout_1 = new HorizontalLayout();
		horizontalLayout_1.setImmediate(false);
		horizontalLayout_1.setWidth("-1px");
		horizontalLayout_1.setHeight("-1px");
		horizontalLayout_1.setMargin(false);
		
		// UserStatsLabel
		UserStatsLabel = new Label();
		UserStatsLabel.setImmediate(false);
		UserStatsLabel.setWidth("-1px");
		UserStatsLabel.setHeight("-1px");
		UserStatsLabel.setValue("Label");
		horizontalLayout_1.addComponent(UserStatsLabel);
		
		return horizontalLayout_1;
	}

}