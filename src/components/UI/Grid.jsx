import PropTypes from "prop-types";
import "./Grid.css";

const Grid = ({ children, columns = 3, gap = "16px", className = "" }) => {
    const style = {
        gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))`,
        gap,
    };
    return <div className={`grid grid-${columns} ${className}`} style={style}>{children}</div>;
};

Grid.propTypes = {
    children: PropTypes.node.isRequired,
    columns: PropTypes.number,
    gap: PropTypes.string,
    className: PropTypes.string,
};

export default Grid;
