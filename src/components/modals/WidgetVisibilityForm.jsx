import Input from "../common/Input";
import ModalActions from "./ModalActions";

const WidgetVisibilityForm = ({
    dashboardData,
    activeCategoryPane,
    onSubmitHandler,
    refreshCheckedList,
    checkedWidgetList,
    closeModal,
}) => {
    return (
        <form
            onSubmit={onSubmitHandler}
            className="flex h-full sm:h-4/5 flex-col sm:justify-between">
            <div className="h-3/5 sm:h-4/5 overflow-auto">
                {dashboardData.map((categoryData) => {
                    if (categoryData.name === activeCategoryPane) {
                        if (categoryData.widgets.length > 0) {
                            return categoryData.widgets.map((widget) => {
                                return (
                                    <Input
                                        key={`${widget.title}_${widget.id}_widgetCheckbox`}
                                        inputType="checkbox"
                                        name={widget.title}
                                        value={widget.id}
                                        hoverEffect={true}
                                        setValue={(widgetId) => {
                                            refreshCheckedList(
                                                widgetId,
                                                categoryData.name
                                            );
                                        }}
                                        isChecked={
                                            checkedWidgetList[
                                                categoryData.name
                                            ]?.has(widget.id) || false
                                        }
                                        widget={widget}
                                        categoryName={categoryData.name}>
                                        {widget.title}
                                    </Input>
                                );
                            });
                        } else {
                            return (
                                <>
                                    <h4 className="text-center mt-5">
                                        No Widgets Added
                                    </h4>
                                </>
                            );
                        }
                    }
                })}
            </div>
            <ModalActions
                closeModal={closeModal}
                buttonText="Confirm"
                transitionEffect={true}
            />
        </form>
    );
};

export default WidgetVisibilityForm;
