import styled from 'styled-components';

export default {
	container: styled.div `
		height: ${props => props.theme.sizes.headerHeight}px;
		background-color: ${props => props.theme.colors.gray_darker};
		border: 2px solid ${props => props.theme.colors.gray_main};
		border-left: none;
		border-right: none;
		border-top: none;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	`,
	item: styled.div `
		display: flex;
		align-items: center;
		color: white;
		font-size: 1.5vmin;
		border-radius: 5px;
		user-select: none;
		cursor: pointer;
		padding: 5px;
		margin: 0 5px;
		background-color: ${props => props.theme.colors.gray_dark};

		&:hover {
			background-color: ${props => props.theme.colors.gray_main};
		}
	`,
}