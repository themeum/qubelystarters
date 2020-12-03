const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { SelectControl, TextControl, TextareaControl } = wp.components;

import { localBusiness, organization, person, review } from './select-options';

const SchemaFields = ({ updatedValue, updateMeta }) => {

    let optionsGroup = [];
    let is_blog_post = qubelystarters_admin.is_post;
    let post_title = qubelystarters_admin.post_title;
    let post_excerpt = qubelystarters_admin.post_excerpt;
    let post_content = qubelystarters_admin.post_content;
    let post_thumbnail = qubelystarters_admin.post_thumbnail;

    const selectOptions = input => {
        if ('LocalBusiness' === input) {
            optionsGroup = localBusiness;
        } else if ('Organization' === input) {
            optionsGroup = organization;
        } else if ('Person' === input) {
            optionsGroup = person;
        } else if ('Review' === input) {
            optionsGroup = review;
        }

        return optionsGroup;
    };

    if ('1' === is_blog_post) {
        return (
            <Fragment>
                <TextControl
                    label={__('Schema Type', 'qubelystarters')}
                    value='Blog Post'
                    disabled={true}
                    style={{ backgroundColor: '#eeeeee', cursor: 'not-allowed' }}
                />
                <TextControl
                    label={__('Title', 'qubelystarters')}
                    placeholder={__('e.g: My Awesome Post', 'qubelystarters')}
                    value={updatedValue.name ? updatedValue.name : post_title}
                    onChange={(value) => updateMeta(value, 'name')}
                />
                <TextControl
                    label={__('Image URL', 'qubelystarters')}
                    placeholder={__('e.g: https://site.com/image-url.jpg', 'qubelystarters')}
                    value={updatedValue.logo_url ? updatedValue.logo_url : post_thumbnail}
                    onChange={(value) => updateMeta(value, 'logo_url')}
                />
                <TextControl
                    label={__('Keywords', 'qubelystarters')}
                    placeholder={__('e.g: seo wordpress blog', 'qubelystarters')}
                    value={updatedValue.keywords}
                    onChange={(value) => updateMeta(value, 'keywords')}
                />
                <TextareaControl
                    label={__('Description', 'qubelystarters')}
                    placeholder={__('e.g: Awesome Description', 'qubelystarters')}
                    value={updatedValue.description ? updatedValue.description : post_excerpt}
                    onChange={(value) => updateMeta(value, 'description')}
                />
                <TextareaControl
                    label={__('Article Body', 'qubelystarters')}
                    placeholder={__('e.g: Awesome Post Content', 'qubelystarters')}
                    value={updatedValue.article_body ? updatedValue.article_body : post_content}
                    onChange={(value) => updateMeta(value, 'article_body')}
                />
            </Fragment>
        );
    } else {

        return (
            <Fragment>
                <SelectControl
                    label={__('Schema Type', 'qubelystarters')}
                    value={updatedValue.main_schema_select}
                    options={[
                        { label: __('--Select--', 'qubelystarters'), value: '' },
                        { label: __('Local Business', 'qubelystarters'), value: 'LocalBusiness' },
                        { label: __('Organization', 'qubelystarters'), value: 'Organization' },
                        { label: __('Web Page', 'qubelystarters'), value: 'WebPage' },
                        { label: __('Video', 'qubelystarters'), value: 'Video' },
                        { label: __('Review', 'qubelystarters'), value: 'Review' },
                        { label: __('Person', 'qubelystarters'), value: 'Person' },
                    ]}
                    onChange={(value) => updateMeta(value, 'main_schema_select')}
                />
                { 'WebPage' !== updatedValue.main_schema_select && 'Video' !== updatedValue.main_schema_select &&
                    <SelectControl
                        label={'Person' === updatedValue.main_schema_select ? __('Gender', 'qubelystarters') : __('Sub Schema Type', 'qubelystarters')}
                        value={updatedValue.sub_schema_select}
                        options={selectOptions(updatedValue.main_schema_select)}
                        onChange={(value) => updateMeta(value, 'sub_schema_select')}
                    />
                }
                <TextControl
                    label={__('Name', 'qubelystarters')}
                    placeholder={__('e.g: John Doe', 'qubelystarters')}
                    value={updatedValue.name}
                    onChange={(value) => updateMeta(value, 'name')}
                />
                { 'Person' === updatedValue.main_schema_select &&
                    <Fragment>
                        <TextControl
                            label={__('Job Title', 'qubelystarters')}
                            placeholder={__('e.g: Software Engineer', 'qubelystarters')}
                            value={updatedValue.job_title}
                            onChange={(value) => updateMeta(value, 'job_title')}
                        />
                        <TextControl
                            label={__('Height', 'qubelystarters')}
                            placeholder={__('e.g: 165 cm', 'qubelystarters')}
                            value={updatedValue.height}
                            onChange={(value) => updateMeta(value, 'height')}
                        />
                        <TextControl
                            label={__('Email', 'qubelystarters')}
                            placeholder={__('e.g: john@doe.com', 'qubelystarters')}
                            value={updatedValue.email}
                            onChange={(value) => updateMeta(value, 'email')}
                        />
                        <TextControl
                            label={__('Birth Date', 'qubelystarters')}
                            placeholder={__('e.g: YYYY-MM-DD', 'qubelystarters')}
                            value={updatedValue.birth_date}
                            onChange={(value) => updateMeta(value, 'birth_date')}
                        />
                        <TextControl
                            label={__('Birth Place', 'qubelystarters')}
                            placeholder={__('e.g: Zurich, Switzerland', 'qubelystarters')}
                            value={updatedValue.birth_place}
                            onChange={(value) => updateMeta(value, 'birth_place')}
                        />
                        <TextControl
                            label={__('Nationality', 'qubelystarters')}
                            placeholder={__('e.g: American', 'qubelystarters')}
                            value={updatedValue.nationality}
                            onChange={(value) => updateMeta(value, 'nationality')}
                        />
                        <TextControl
                            label={__('PO Box', 'qubelystarters')}
                            placeholder={__('e.g: 4521', 'qubelystarters')}
                            value={updatedValue.po_box}
                            onChange={(value) => updateMeta(value, 'po_box')}
                        />
                    </Fragment>
                }
                { 'Person' !== updatedValue.main_schema_select && 'WebPage' !== updatedValue.main_schema_select &&
                    <TextControl
                        label={'Video' === updatedValue.main_schema_select ? __('Thumbnail URL', 'qubelystarters') : __('Logo/Image URL', 'qubelystarters')}
                        placeholder={__('e.g: https://site.com/image-url.jpg', 'qubelystarters')}
                        value={updatedValue.logo_url}
                        onChange={(value) => updateMeta(value, 'logo_url')}
                    />
                }
                { 'Person' !== updatedValue.main_schema_select &&
                    <TextareaControl
                        label={__('Description', 'qubelystarters')}
                        placeholder={__('e.g: Awesome description', 'qubelystarters')}
                        value={updatedValue.description}
                        onChange={(value) => updateMeta(value, 'description')}
                    />
                }
                { 'Organization' === updatedValue.main_schema_select &&
                    <TextControl
                        label={__('PO Box', 'qubelystarters')}
                        placeholder={__('e.g: 4521', 'qubelystarters')}
                        value={updatedValue.po_box}
                        onChange={(value) => updateMeta(value, 'po_box')}
                    />
                }
                { 'WebPage' !== updatedValue.main_schema_select && 'Video' !== updatedValue.main_schema_select && 'Review' !== updatedValue.main_schema_select &&
                    <Fragment>
                        <TextControl
                            label={__('Address', 'qubelystarters')}
                            placeholder={__('e.g: 45, johnson road', 'qubelystarters')}
                            value={updatedValue.address}
                            onChange={(value) => updateMeta(value, 'address')}
                        />
                        <TextControl
                            label={__('Phone Number', 'qubelystarters')}
                            placeholder={__('e.g: +1 22 33 4567', 'qubelystarters')}
                            value={updatedValue.phone}
                            onChange={(value) => updateMeta(value, 'phone')}
                        />
                        <TextControl
                            label={__('City', 'qubelystarters')}
                            placeholder={__('e.g: New York', 'qubelystarters')}
                            value={updatedValue.city}
                            onChange={(value) => updateMeta(value, 'city')}
                        />
                        <TextControl
                            label={__('State/Region', 'qubelystarters')}
                            placeholder={__('e.g: California(CA)', 'qubelystarters')}
                            value={updatedValue.state_region}
                            onChange={(value) => updateMeta(value, 'state_region')}
                        />
                        <TextControl
                            label={__('Zip/Postal Code', 'qubelystarters')}
                            placeholder={__('e.g: 1234', 'qubelystarters')}
                            value={updatedValue.zip_code}
                            onChange={(value) => updateMeta(value, 'zip_code')}
                        />
                        <TextControl
                            label={__('Country', 'qubelystarters')}
                            placeholder={__('e.g: USA', 'qubelystarters')}
                            value={updatedValue.country}
                            onChange={(value) => updateMeta(value, 'country')}
                        />
                    </Fragment>
                }
                { 'Video' === updatedValue.main_schema_select &&
                    <Fragment>
                        <TextControl
                            label={__('Upload Date', 'qubelystarters')}
                            help={__('Format it like this YYYY-MM-DD and the time with "T then hour:minute:second+timezone"', 'qubelystarters')}
                            placeholder={__('e.g: 2020-10-10T08:00:00+08:00', 'qubelystarters')}
                            value={updatedValue.upload_date}
                            onChange={(value) => updateMeta(value, 'upload_date')}
                        />
                        <TextControl
                            label={__('Duration', 'qubelystarters')}
                            help={__('Format it like this: PT then 1 minute and then 30 second', 'qubelystarters')}
                            placeholder={__('e.g: PT1M30S', 'qubelystarters')}
                            value={updatedValue.duration}
                            onChange={(value) => updateMeta(value, 'duration')}
                        />
                        <TextControl
                            label={__('Content URL', 'qubelystarters')}
                            placeholder={__('e.g: https://example.com/video-url.mp4', 'qubelystarters')}
                            value={updatedValue.content_url}
                            onChange={(value) => updateMeta(value, 'content_url')}
                        />
                        <TextControl
                            label={__('Embed URL', 'qubelystarters')}
                            placeholder={__('e.g: https://example.com/videoplayer.swf?video=123', 'qubelystarters')}
                            value={updatedValue.embed_url}
                            onChange={(value) => updateMeta(value, 'embed_url')}
                        />
                        <TextControl
                            label={__('Interaction Count', 'qubelystarters')}
                            placeholder={__('e.g: 1254', 'qubelystarters')}
                            value={updatedValue.interaction_count}
                            onChange={(value) => updateMeta(value, 'interaction_count')}
                        />
                    </Fragment>
                }
                { 'Review' === updatedValue.main_schema_select &&
                    <Fragment>
                        <TextControl
                            label={__('Rating Value', 'qubelystarters')}
                            placeholder={__('e.g: 4', 'qubelystarters')}
                            value={updatedValue.rating_value}
                            onChange={(value) => updateMeta(value, 'rating_value')}
                        />
                        <TextControl
                            label={__('Reviewed Item', 'qubelystarters')}
                            placeholder={__('e.g: iPhone 11 Pro Case', 'qubelystarters')}
                            value={updatedValue.reviewed_product}
                            onChange={(value) => updateMeta(value, 'reviewed_product')}
                        />
                        <TextControl
                            label={__('Reviewed By', 'qubelystarters')}
                            placeholder={__('e.g: Mr John Doe', 'qubelystarters')}
                            value={updatedValue.reviewed_by}
                            onChange={(value) => updateMeta(value, 'reviewed_by')}
                        />
                        <TextControl
                            label={__('Date Published', 'qubelystarters')}
                            help={__('Format it like this YYYY-MM-DD', 'qubelystarters')}
                            placeholder={__('e.g: 2020-10-10', 'qubelystarters')}
                            value={updatedValue.date_published}
                            onChange={(value) => updateMeta(value, 'date_published')}
                        />
                        <TextControl
                            label={__('Review Publisher Type', 'qubelystarters')}
                            placeholder={__('e.g: Organization', 'qubelystarters')}
                            value={updatedValue.publisher_type}
                            onChange={(value) => updateMeta(value, 'publisher_type')}
                        />
                        <TextControl
                            label={__('Publisher Name', 'qubelystarters')}
                            placeholder={__('e.g: iPhone 11 Pro Case Inc.', 'qubelystarters')}
                            value={updatedValue.publisher_name}
                            onChange={(value) => updateMeta(value, 'publisher_name')}
                        />
                    </Fragment>
                }
            </Fragment>
        );
    }
}

export default SchemaFields;