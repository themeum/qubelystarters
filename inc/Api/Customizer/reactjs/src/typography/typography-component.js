import PropTypes from 'prop-types';
import ResponsiveControl from '../common/responsive';
import classnames from 'classnames';
const { __ } = wp.i18n;
const { SelectControl, RangeControl, Button } = wp.components;
const { Component, Fragment } = wp.element;

class TypographyComponent extends Component {
	constructor(props) {
		super(props);
		let value = props.control.setting.get();
		let defaultParams = {
			weight_default: 700,
			text_transform: 'none',
		};

		if (!value) {
			value = this.getEmptyValue();
		}
		if (props.control.params.input_attrs.length) {
			const input_attrs = JSON.parse(props.control.params.input_attrs);
			if (input_attrs.default_is_empty) {
				defaultParams = this.getEmptyDefault();
			}
		}

		this.controlParams = props.control.params.input_attrs
			? {
				...defaultParams,
				...JSON.parse(props.control.params.input_attrs),
			}
			: defaultParams;

		this.state = {
			currentDevice: 'desktop',
			defaultFontSizes: {
				desktop: 16,
				mobile: 13,
				tablet: 13,
				...this.controlParams.defaultParams.font_sizes
			},
			defaultLineHeights: {
				desktop: 20,
				mobile: 20,
				tablet: 20,
				...this.controlParams.defaultParams.line_heights
			},
			fontWeight: value.fontWeight,
			textTransform: value.textTransform,
			fontSize: value.fontSize,
			lineHeight: value.lineHeight,
		};

		this.renderFontSize = this.renderFontSize.bind(this);
		this.renderFontWeight = this.renderFontWeight.bind(this);
		this.controlHeader = this.controlHeader.bind(this);
		this.unitButtons = this.unitButtons.bind(this);
		this.renderTextTransform = this.renderTextTransform.bind(this);
		this.updateValues = this.updateValues.bind(this);
	}


	getEmptyValue(prop = '') {
		const emptyValue = {
			fontWeight: 700,
			textTransform: 'none',
		};
		if (prop && emptyValue[prop]) {
			return emptyValue[prop];
		}
		return emptyValue;
	}

	getEmptyDefault() {
		return {
			weight_default: 700,
			text_transform: 'none',
		};
	}

	unitButtons(units, key) {
		if (!units) {
			return null;
		}

		if (units.length === 1) {
			return <Button isSmall disabled className='active alone'>{units[0]}</Button>
		}

		return units.map((unit, index) => {
			const { currentDevice } = this.state;
			const value=this.state[key];
			const buttonClass = classnames({ active: value[currentDevice + '-unit'] === unit });
			return (
				<Button
					key={index}
					isSmall
					className={buttonClass}
					onClick={() => {
						const nextValue = { ...value }
						nextValue[currentDevice + '-unit'] = unit;
						if (unit !== 'em') {
							nextValue[currentDevice] = lodash.mapValues(
								nextValue[currentDevice],
								(value) => value ? parseInt(value) : value
							)
						}
						this.setState({ [key]: nextValue });
						this.updateValues({ [key]: nextValue });
					}}
				>
					{unit}
				</Button>
			);
		});
	}

	controlHeader(label, key, units, hideResponsive = false) {
		return (
			<div className='qubelystarters-responsive-control-header'>
				{label && <span className='customize-control-title'>{__(label, 'qubelystarters')}</span>}
				<ResponsiveControl
					onChange={(currentDevice) => this.setState({ currentDevice })}
					hideResponsive={hideResponsive || false}
				/>
				<div className='qubelystarters-units'>
					{this.unitButtons(units, this.state[key], key)}
				</div>
			</div>
		);
	}

	renderFontSize() {
		const {
			fontSize,
			defaultFontSizes,
			currentDevice,
		} = this.state;

		const {
			font_sizes: {
				min,
				max,
				units
			}
		} = this.controlParams;

		return (
			<div className="select-inline font-size">
				{this.controlHeader('Font Sizes', 'fontSize', units)}
				<RangeControl
					step={1}
					min={min}
					max={max}
					allowReset
					isShiftStepEnabled
					value={fontSize[currentDevice]}
					resetFallbackValue={defaultFontSizes[currentDevice]}
					onChange={(newValue) => {
						this.setState(prevState => ({ fontSize: { ...prevState.fontSize, [currentDevice]: newValue } }));
						this.updateValues({ fontSize: { ...fontSize, [currentDevice]: newValue } });
					}}
				/>
			</div>
		);
	}

	renderLineHeight() {
		const {
			lineHeight,
			defaultLineHeights,
			currentDevice,
		} = this.state;

		const {
			line_heights: {
				min,
				max,
				units
			}
		} = this.controlParams;

		return (
			<div className="select-inline line-height">
				{this.controlHeader('Line Height', 'lineHeight', units)}
				<RangeControl
					step={1}
					min={min}
					max={max}
					allowReset
					isShiftStepEnabled
					value={lineHeight[currentDevice]}
					resetFallbackValue={defaultLineHeights[currentDevice]}
					onChange={(newValue) => {
						this.setState(prevState => ({ lineHeight: { ...prevState.lineHeight, [currentDevice]: newValue } }));
						this.updateValues({ lineHeight: { ...lineHeight, [currentDevice]: newValue } });
					}}
				/>
			</div>
		);
	}

	render() {
		return (
			<Fragment>
				{ this.props.control.params.label && (
					<span className="customize-control-title">
						{ this.props.control.params.label}
					</span>
				)}
				<div className="qubelystarters-typography-control qubelystarters-background-control">
					{this.renderFontSize()}
					{this.renderLineHeight()}
					{this.renderFontWeight()}
					{this.renderTextTransform()}
				</div>
			</Fragment>
		);
	}

	updateValues(value) {
		this.props.control.setting.set({
			...this.props.control.setting.get(),
			...value,
		});
	}

	renderFontWeight() {
		return (
			<div className="select-inline font-weight">
				<span className="customize-control-title">
					{__('Font Weight', 'qubelystarters')}
				</span>
				<SelectControl
					value={this.state.fontWeight}
					options={[
						{ value: 'none', label: __('None', 'qubelystarters') },
						{ value: 100, label: '100' },
						{ value: 200, label: '200' },
						{ value: 300, label: '300' },
						{ value: 400, label: '400' },
						{ value: 500, label: '500' },
						{ value: 600, label: '600' },
						{ value: 700, label: '700' },
						{ value: 800, label: '800' },
						{ value: 900, label: '900' },
					]}
					onChange={(fontWeight) => {
						this.setState({ fontWeight });
						this.updateValues({ fontWeight });
					}}
				/>
			</div>
		);
	}

	renderTextTransform() {
		return (
			<div className="select-inline text-transform">
				<span className="customize-control-title">
					{__('Text Transform', 'qubelystarters')}
				</span>
				<SelectControl
					value={this.state.textTransform}
					options={[
						{ value: 'none', label: __('None', 'qubelystarters') },
						{
							value: 'capitalize',
							label: __('Capitalize', 'qubelystarters'),
						},
						{
							value: 'lowercase',
							label: __('Lowercase', 'qubelystarters'),
						},
						{
							value: 'uppercase',
							label: __('Uppercase', 'qubelystarters'),
						},
					]}
					onChange={(textTransform) => {
						this.setState({ textTransform });
						this.updateValues({ textTransform });
					}}
				/>
			</div>
		);
	}
}

TypographyComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default TypographyComponent;
