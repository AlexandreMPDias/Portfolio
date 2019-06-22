import styled from 'styled-components';

export default {
	container: styled.div `
		height: ${props => props.theme.sizes.footerHeight}px;
		background-color: ${props => props.theme.colors.gray_darker};
		border: 2px solid ${props => props.theme.colors.gray_main};
		border-left: none;
		border-right: none;
		border-bottom: none;
	`
}