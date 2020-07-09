import styled from "styled-components";

const Span = styled.span<{ complete: boolean }>`\
    text-decoration: ${(props) => (props.complete ? "line-through" : "none")};
`;

export default Span;