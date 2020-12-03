const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { SelectControl, ToggleControl } = wp.components;

const PageSettingsFields = ({ updatedValue, updateMeta }) => {

    let is_page = qubelystarters_admin.is_page;

    if ('1' === is_page) {
        return (
            <Fragment>
                <SelectControl
                    label={__('Sidebar', 'qubelystarters')}
                    value={updatedValue.sidebar_select}
                    options={[
                        { label: __('--Select Option--', 'qubelystarters'), value: '' },
                        { label: __('No Sidebar', 'qubelystarters'), value: 'no-sidebar' },
                        { label: __('Left Sidebar', 'qubelystarters'), value: 'left-sidebar' },
                        { label: __('Right Sidebar', 'qubelystarters'), value: 'right-sidebar' },
                    ]}
                    onChange={(value) => updateMeta(value, 'sidebar_select')}
                />
                <ToggleControl
                    label={__('Disable Title?', 'qubelystarters')}
                    checked={updatedValue.page_title_toggle}
                    onChange={(value) => updateMeta(value, 'page_title_toggle')}
                />
                <ToggleControl
                    label={__('Disable Header?', 'qubelystarters')}
                    checked={updatedValue.header_toggle}
                    onChange={(value) => updateMeta(value, 'header_toggle')}
                />
                <ToggleControl
                    label={__('Disable Footer?', 'qubelystarters')}
                    checked={updatedValue.footer_toggle}
                    onChange={(value) => updateMeta(value, 'footer_toggle')}
                />
            </Fragment>
        );
    } else {
        return (
            <Fragment>

            </Fragment>
        );
    }
}

export default PageSettingsFields;