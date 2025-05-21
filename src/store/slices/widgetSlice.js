import { createSlice } from "@reduxjs/toolkit";
import dashboardData from "../../data/dashboardData.json";

const widgetData = createSlice({
    name: "widgetData",
    initialState: {
        value: dashboardData.categories,
    },
    reducers: {
        addWidget: (state, actions) => {
            const categoryData = state.value.find((category) => {
                return category.name == actions.payload.category;
            });
            categoryData.widgets.push({
                id: `widget-${Date.now()}`,
                title: actions.payload.title,
                data: actions.payload.data,
            });

            localStorage.setItem("dashboardData", JSON.stringify(state.value));
        },
        removeWidget: (state, actions) => {
            state.value = state.value.map((category) => {
                if (category.name == actions.payload.category) {
                    return {
                        ...category,
                        widgets: category.widgets.filter((widget) => {
                            return widget.id !== actions.payload.id;
                        }),
                    };
                }
                return category;
            });
            localStorage.setItem("dashboardData", JSON.stringify(state.value));
        },
        syncModalWidgets: (state, actions) => {
            state.value = state.value.map((category) => {
                const widgetsToKeep = category.widgets.filter((widget) => {
                    const widgetSet = new Set(actions.payload[category.name]);
                    return widgetSet.has(widget.id);
                });

                return {
                    ...category,
                    widgets: widgetsToKeep,
                };
            });
            localStorage.setItem("dashboardData", JSON.stringify(state.value));
        },

        resetDashboard: (state) => {
            state.value = dashboardData.categories;
            localStorage.setItem("dashboardData", JSON.stringify(state.value));
        },
    },
});

export const { addWidget, removeWidget, syncModalWidgets, resetDashboard } =
    widgetData.actions;

export default widgetData.reducer;
