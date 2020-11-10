import React, { useState } from "react";
import {
	HideCheckbox, CheckboxInput,
	Container, Title, RadioInput,
	RadioInputActive
} from "./index.styled";
import CheckedImage from "../../assets/icons/icon-checkbox-checked.svg";
import CheckedDisabledImage from "../../assets/icons/icon-checkbox-checked-disabled.svg";
import PropTypes from "prop-types";


const CheckBoxStyled = ({radio, title, onCheck, checked, disabled, titleNoWrap}) => {
	const [isChecked, setIsChecked] = useState(checked);

	const handleCheckboxChange = (event) => {
		onCheck && onCheck(event);
		setIsChecked(event.target.checked);
	};

	return (
		<div>
			<Container disabled={disabled}>
				<HideCheckbox
					disabled={disabled}
					type={"checkbox"}
					checked={isChecked}
					onChange={handleCheckboxChange}
				/>
				{
					radio
					? <RadioInput checked={isChecked}>
							{
								isChecked &&
									<RadioInputActive/>
							}
						</RadioInput>
					: <CheckboxInput disabled={disabled} checked={isChecked}>
							{
								isChecked &&
								<img
									alt={"CheckBox"}
									src={disabled ? CheckedDisabledImage : CheckedImage}
								/>
							}
						</CheckboxInput>
				}
				<Title
					titleNoWrap={titleNoWrap}
					title={title}
				>
					{title}
				</Title>
			</Container>
		</div>
	);
};

CheckBoxStyled.propTypes = {
	radio: PropTypes.bool,
	title: PropTypes.string.isRequired,
	onCheck: PropTypes.func.isRequired,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	titleNoWrap: PropTypes.bool
};

CheckBoxStyled.defaultProps = {
	radio: false,
	checked: false,
	titleNoWrap: false,
	disabled: false
};

export default CheckBoxStyled;
