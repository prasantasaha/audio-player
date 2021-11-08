import { Grommet } from 'grommet';
import React, { useEffect } from 'react';
import { AppContextProvider } from './AppContext';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import theme from './index.style';
import Radio from './Radio';
import { resizeToMinimum } from './util';


const App = () => {
    useEffect(() => {
        window.addEventListener('resize', resizeToMinimum);
        window.addEventListener('load', resizeToMinimum)

        return () => {
            window.removeEventListener('resize', resizeToMinimum);
            window.removeEventListener('load', resizeToMinimum)
        }

    }, [])
    return (
        <ErrorBoundary>
            <Grommet full theme={theme}>
                <AppContextProvider>
                    <Header />
                    <Radio />
                </AppContextProvider>
            </Grommet>
        </ErrorBoundary>
    )
}

export default App;