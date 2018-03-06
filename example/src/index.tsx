/**
 * Created by yan on 16-1-20.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Card from '../../src/Card/index';

class App extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div>
                    {/* <Card.Card>xxx34x</Card.Card>adszzzdsds */}hoidsoidsosjfo
                </div>
                <div>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

// export default hot(module)(App)

// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log('Accepting the updated printMe module!');
//         printMe();
//     })
// }