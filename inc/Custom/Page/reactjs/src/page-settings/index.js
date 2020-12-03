const { compose } = wp.compose;
const { PluginDocumentSettingPanel } = wp.editPost;
const { select, withSelect, withDispatch } = wp.data;

import PageSettingsFields from './fields/page-settings-fields';

const PageSettingsFieldsData = compose([
    withSelect(() => {
        return {
            updatedValue: select('core/editor').getEditedPostAttribute('meta')._qubelystarters_page_metadata,
        }
    }),
    withDispatch((dispatch) => ({
        updateMeta(value, prop) {
            let meta = select('core/editor').getEditedPostAttribute('meta')._qubelystarters_page_metadata;
            meta = {
                sidebar_select: 'no-sidebar',
                page_title_toggle: false,
                header_toggle: false,
                footer_toggle: false,
                ...meta
            };
            meta[prop] = value;

            dispatch('core/editor').editPost({ meta: { _qubelystarters_page_metadata: meta } });
        }
    })),
])(PageSettingsFields);

const QubelyStartersPageSettingsPanel = () => {

    return (
        <PluginDocumentSettingPanel
            name='qubelystarters-settings-panel'
            title='Qubely Starters Page Settings'
        >
            <PageSettingsFieldsData />
        </PluginDocumentSettingPanel>
    )
}

export default QubelyStartersPageSettingsPanel;