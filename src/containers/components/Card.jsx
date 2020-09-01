import React,{memo} from 'react';
import {Card as CardUI} from '../../components';
import PropTypes from 'prop-types';
import {
    LabelStyled,
    ValueStyled,
    CardContentStyled
} from './styled';

function Card({value, label, color}){
    return(
        <CardUI>
            <CardContentStyled color={color}>
                <ValueStyled>{value}</ValueStyled>
                <LabelStyled>{label}</LabelStyled>
            </CardContentStyled>
        </CardUI>
    )
}
export default memo(Card);