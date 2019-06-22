import styled from 'styled-components';

export default {
	body: styled.div `
		min-height: calc(100% - ${props=> props.theme.sizes.headerHeight + props.theme.sizes.footerHeight + 4}px);
	`
}