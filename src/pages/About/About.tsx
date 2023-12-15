import styled from 'styled-components';

const AboutWrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

const Category = styled.div``;

const CategoryTitleWrapper = styled.div`
	background-color: lightgray;
`;

const CategoryTitle = styled.span`
	font-size: 1.5rem;
	display: flex;
	flex-basis: 100%;
	align-items: center;

	&:after {
		content: '';
		flex-grow: 1;
		background: black;
		height: 1px;
		margin: 0px 16px;
	}
`;

const Description = styled.div`
	background-color: lightcoral;
	padding: 16px 32px;
`;

export default function About(): JSX.Element {
	return (
		<AboutWrapper>
			<Category>
				<CategoryTitleWrapper>
					<CategoryTitle>카테고리 제목</CategoryTitle>
				</CategoryTitleWrapper>
				<Description>
					설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분
					설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분
					설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분
					설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분
					설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분
				</Description>
			</Category>
			<Category>
				<CategoryTitleWrapper>
					<CategoryTitle>카테고리 제목</CategoryTitle>
				</CategoryTitleWrapper>
				<Description>
					설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분
					설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분
					설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분
					설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분
					설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분
				</Description>
			</Category>
			<Category>
				<CategoryTitleWrapper>
					<CategoryTitle>카테고리 제목</CategoryTitle>
				</CategoryTitleWrapper>
				<Description>
					설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분
					설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분
					설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분
					설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분
					설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분
				</Description>
			</Category>
			<Category>
				<CategoryTitleWrapper>
					<CategoryTitle>카테고리 제목</CategoryTitle>
				</CategoryTitleWrapper>
				<Description>
					설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분
					설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분
					설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분
					설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분
					설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분 설명부분
				</Description>
			</Category>
		</AboutWrapper>
	);
}
