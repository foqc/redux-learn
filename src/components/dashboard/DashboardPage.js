import React from 'react';
import Container from '../../common/Container';

class DashboardPage extends React.Component {

    render() {
        return (
            <Container mainHeader="DASHBOARD" secondHeader="OUR SERVICES" infoHeader="DASHBOARD">
                <div className="row">
                    <div className="col">
                        <div className="info-box bg-pink hover-expand-effect">
                            <div className="icon">
                                <i className="material-icons">playlist_add_check</i>
                            </div>
                            <div className="content">
                                <div className="text">NEW TASKS</div>
                                <div className="number count-to" data-from="0" data-to="125" data-speed="15" data-fresh-interval="20">125</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="info-box bg-cyan hover-expand-effect">
                            <div className="icon">
                                <i className="material-icons">help</i>
                            </div>
                            <div className="content">
                                <div className="text">NEW TICKETS</div>
                                <div className="number count-to" data-from="0" data-to="257" data-speed="1000" data-fresh-interval="20">257</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="info-box bg-light-green hover-expand-effect">
                            <div className="icon">
                                <i className="material-icons">forum</i>
                            </div>
                            <div className="content">
                                <div className="text">NEW COMMENTS</div>
                                <div className="number count-to" data-from="0" data-to="243" data-speed="1000" data-fresh-interval="20">243</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

export default DashboardPage;