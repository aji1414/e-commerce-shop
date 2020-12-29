import React from "react";
import "./Directory.styles.scss";

// Components import
import MenuItem from "../MenuItem/MenuItem.component";


// redux
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../Redux/Directory/Directory.selectors";

const Directory = ({sections}) => (
    <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);