import React from 'react';
import AllCards from '../CardSection/AllCards';
import FirstChart from '../FirstChart/FirstChart';
import Header from '../Header/Header';
import Progress from '../ProgressBar/Progress';
import SecondChart from '../SecondChart/SecondChart';

const Home = () => {
    return (
        <div>
            <Header /> {/* it contains the first bar */}

            <AllCards /> {/* it contains all card data */}

            <div className='d-flex flex-wrap justify-content-center'>

                <Progress /> {/* it is bar chart part */}
                
                <div>
                    <FirstChart /> {/* first line chart part */}

                    <SecondChart /> {/* second line chart part */}
                </div>
            </div>
        </div>
    );
};

export default Home;