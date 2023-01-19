import React from 'react';
import { Card } from 'react-bootstrap';
import { BiCaretDown, BiCaretRight } from "react-icons/bi";

const AllCards = () => {
    return (
        <div className='px-3 mt-3 d-flex flex-wrap justify-content-between gap-3'>
            <Card border="light" style={{ width: '12rem' }}>
                <Card.Header style={{backgroundColor: 'white'}} className="text-center fw-bolder">Created</Card.Header>
                <Card.Body style={{backgroundColor: '#fbfbfb', color: '#8bc472'}} className="text-center">
                    <Card.Title className='fs-3 p-0 my-0 lh-1'>593</Card.Title>
                </Card.Body>
                <Card.Footer style={{backgroundColor: 'white'}} className="p-0 text-center fs-5 lh-2 my-0">
                    <p>to yesterday <br /> <span style={{color: '#76b958'}}><BiCaretDown className='fs-5 pb-1' />9%</span> </p>
                </Card.Footer>
            </Card>
            <Card border="light" style={{ width: '12rem' }}>
                <Card.Header style={{backgroundColor: 'white'}} className="text-center fw-bolder">Unassigned</Card.Header>
                <Card.Body style={{backgroundColor: '#fbfbfb', color: '#8bc472'}} className="text-center">
                    <Card.Title className='fs-3 p-0 my-0 lh-1'>7</Card.Title>
                </Card.Body>
                <Card.Footer style={{backgroundColor: 'white'}} className="p-0 text-center fs-5 lh-2 my-0">
                    <p>to yesterday <br /> <span style={{color: '#76b958'}}><BiCaretDown className='fs-5 pb-1' />30%</span> </p>
                </Card.Footer>
            </Card>
            <Card border="light" style={{ width: '12rem' }}>
                <Card.Header style={{backgroundColor: 'white'}} className="text-center fw-bolder">Open</Card.Header>
                <Card.Body style={{backgroundColor: '#fbfbfb', color: '#8bc472'}} className="text-center">
                    <Card.Title className='fs-3 p-0 my-0 lh-1'>46</Card.Title>
                </Card.Body>
                <Card.Footer style={{backgroundColor: 'white'}} className="p-0 text-center fs-5 lh-2 my-0">
                    <p>to yesterday <br /> <span style={{color: '#76b958'}}><BiCaretDown className='fs-5 pb-1' />13%</span> </p>
                </Card.Footer>
            </Card>
            <Card border="light" style={{ width: '12rem' }}>
                <Card.Header style={{backgroundColor: 'white'}} className="text-center fw-bolder">Solved</Card.Header>
                <Card.Body style={{backgroundColor: '#fbfbfb', color: '#8bc472'}} className="text-center">
                    <Card.Title className='fs-3 p-0 my-0 lh-1'>526</Card.Title>
                </Card.Body>
                <Card.Footer style={{backgroundColor: 'white'}} className="p-0 text-center fs-5 lh-2 my-0">
                    <p>to yesterday <br /> <span style={{color: 'red'}}><BiCaretDown className='fs-5 pb-1' />8%</span> </p>
                </Card.Footer>
            </Card>
            <Card border="light" style={{ width: '12rem' }}>
                <Card.Header style={{backgroundColor: 'white'}} className="text-center fw-bolder">Escalated</Card.Header>
                <Card.Body style={{backgroundColor: '#fbfbfb', color: '#8bc472'}} className="text-center">
                    <Card.Title className='fs-3 p-0 my-0 lh-1'>2</Card.Title>
                </Card.Body>
                <Card.Footer style={{backgroundColor: 'white'}} className="p-0 text-center fs-5 lh-2 my-0">
                    <p>to yesterday <br /> <span style={{color: 'black'}}><BiCaretRight className='fs-5 pb-1' />0%</span> </p>
                </Card.Footer>
            </Card>
            <Card border="light" style={{ width: '12rem' }}>
                <Card.Header style={{backgroundColor: 'white'}} className="text-center fw-bolder">Sydney</Card.Header>
                <Card.Body style={{backgroundColor: '#fbfbfb', color: '#8bc472'}} className="text-center">
                    <Card.Title className='fs-3 p-0 my-0 lh-1'>1:41 AM</Card.Title>
                </Card.Body>
                <Card.Footer style={{backgroundColor: 'white'}} className="p-0 text-center fs-5 lh-2 my-0">
                    <p>Tuesday <br /> <span style={{color: 'black'}}>18 Dec 2018</span> </p>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default AllCards;