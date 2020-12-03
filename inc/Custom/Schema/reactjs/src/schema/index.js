const { compose } = wp.compose;
const { PluginDocumentSettingPanel } = wp.editPost;
const { select, withSelect, withDispatch } = wp.data;

import SchemaFields from './fields/schema-fields';

const SchemaFieldsData = compose([
    withSelect(() => {
        return {
            updatedValue: select('core/editor').getEditedPostAttribute('meta')._qubelystarters_schema_metadata,
        }
    }),
    withDispatch((dispatch) => ({
        updateMeta(value, prop) {
            let meta = select('core/editor').getEditedPostAttribute('meta')._qubelystarters_schema_metadata;
            meta = {
                main_schema_select: '',
                sub_schema_select: '',
                name: '',
                logo_url: '',
                description: '',
                address: '',
                phone: '',
                city: '',
                state_region: '',
                zip_code: '',
                country: '',
                po_box: '',
                job_title: '',
                height: '',
                birth_date: '',
                birth_place: '',
                nationality: '',
                duration: '',
                upload_date: '',
                content_url: '',
                embed_url: '',
                interaction_count: '',
                rating_value: '',
                reviewed_product: '',
                reviewed_by: '',
                date_published: '',
                publisher_type: '',
                publisher_name: '',
                keywords: '',
                article_body: '',
                ...meta
            };
            meta[prop] = value;

            dispatch('core/editor').editPost({ meta: { _qubelystarters_schema_metadata: meta } });
        }
    })),
])(SchemaFields);

const QubelyStartersSchemaPanel = () => {

    return (
        <PluginDocumentSettingPanel
            name='qubelystarters-schema-panel'
            title='Qubely Starters Schema Settings'
        >
            <SchemaFieldsData />
        </PluginDocumentSettingPanel>
    )
}

export default QubelyStartersSchemaPanel;