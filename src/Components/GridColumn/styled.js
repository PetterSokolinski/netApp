import styled from 'styled-components'
import { Edit } from 'styled-icons/boxicons-solid/Edit'
import { DeleteForever } from 'styled-icons/material/DeleteForever'

export const ContentWrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
`

export const TaskName = styled.h1`
    text-align: center;
    font-style: italic;
    border-bottom: 1px solid grey;
    width: 50%;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
`
export const ProjectName = styled.h2`
    position: relative;
    width: 50%;
    float: right;
    text-align: center;
    padding-top: 2vw;
`

export const TagContainer = styled.span`
    margin: 6px
    padding: 6px;
    font-size: 2.5vh;
    border: 1px solid #03a9f4;
    border-radius: 5px;
    cursor: pointer;
    &: hover {
        border: 2px solid #03a9f4;
        margin: 5px;
        box-shadow: 1px -1px 10px 0px rgba(0, 0, 0, 0.75);
    }
`

export const TagsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const IconsWrapper = styled.div`
    display: flex;
    width: 50%;
    float: right;
    right: 5vw;
    bottom: 2vw;
    position: relative;
`

export const EditIcon = styled(Edit)`
    right: -12vw;
    position: relative;
    cursor: pointer;
    transition: 0.3s;
    opacity: 0;
    ${ContentWrapper}:hover & {
        opacity: 1;
    }
    &:hover {
        box-shadow: 1px -1px 10px 0px rgba(0, 0, 0, 0.75);
        border: 0.5px solid #03a9f4;
    }
`

export const DeleteIcon = styled(DeleteForever)`
    right: -15vw;
    position: relative;
    color: red;
    cursor: pointer;
    opacity: 0;
    transition: 0.3s;
    ${ContentWrapper}:hover & {
        opacity: 1;
    }
    &:hover {
        box-shadow: 1px -1px 10px 0px rgba(0, 0, 0, 0.75);
        border: 0.5px solid #03a9f4;
    }
`