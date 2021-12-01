import React from 'react'
import { DropDownMenu, MenuItem } from "material-ui";
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles'
import {deepOrange500} from 'material-ui/styles/colors'

const styles = {
    customWidth: {
        width: 200,
    },
};

export default class DropdownTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: [1] };
        this.muiTheme = getMuiTheme({
            palette: {
                accent1Color: deepOrange500
            }
            , userAgent: props.userAgent
        })
    }

    handleChange (event, index, value)
    {
        debugger
        this.setState({ value })
};

    render() {
        return (

            <MuiThemeProvider muiTheme={this.muiTheme}>
                <div>
                    <DropDownMenu value={this.state.value} multiple={true} onChange={this.handleChange.bind(this)} >
                        <MenuItem value={1} primaryText="Never" />
                        <MenuItem value={2} primaryText="Every Night" />
                        <MenuItem value={3} primaryText="Weeknights" />
                        <MenuItem value={4} primaryText="Weekends" />
                        <MenuItem value={5} primaryText="Weekly" />
                    </DropDownMenu>
                    <br />

                </div>
            </MuiThemeProvider>


        );
    }
}