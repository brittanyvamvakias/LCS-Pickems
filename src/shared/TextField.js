import TextField from '@material-ui/core/TextField';
import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import green from '@material-ui/core/colors/green';


const customTheme = createMuiTheme({
    overrides: {
        MuiFormControl: {
            borderColor: green
        }
    }
});

export function LcsTextField(id, label, variant, value) {
    return (
        <ThemeProvider theme={customTheme}>
            <TextField
                id={id}
                label={label}
                variant={variant}
                value={value}
            />
        </ThemeProvider>
    );
}