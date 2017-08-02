import React, { Component } from 'react';




class MainPage extends Component {
    render() {
        return (
            <div>
                <div >
                    <Header userName={constValues.DUMMY_USER_NAME} />
                </div>
                <section className="task-container">
                    {this.props.children}
                </section>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default MainPage;