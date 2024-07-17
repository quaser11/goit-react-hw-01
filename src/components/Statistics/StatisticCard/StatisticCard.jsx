import { getRandomColor} from "../../utils/colorRandomizer.js";
import PropTypes from 'prop-types';
import {Item} from '../Statistics.styled'

export const StatisticCard = ({item}) => {
    const color = getRandomColor();
    return <Item style={{backgroundColor: color}}>
        <span >{item.label}</span>
        <span>{item.percentage}%</span>
    </Item>
}

StatisticCard.propTypes = {
    item:PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
}