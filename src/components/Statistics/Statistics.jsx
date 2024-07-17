import {Statistic, Title, StatLists} from "./Statistics.styled";

import PropTypes from "prop-types";
import {StatisticCard} from "./StatisticCard/StatisticCard";

export const Statistics = ({title, data}) => {
    return <Statistic>
        {title && <Title>{title}</Title>}

        <StatLists>
            {data.map((item) => {
                return <StatisticCard key={item.id} item={item} />
            })}
        </StatLists>
    </Statistic>
}

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}