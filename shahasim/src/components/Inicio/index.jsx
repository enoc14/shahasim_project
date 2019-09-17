import React from 'react';
import Slide from './Slide';

const Inicio = () => {
    return(
        <>
        <div className="jumbotron">
            <h1 className="display-5">¿Qué hacemos?</h1>
            <hr className="my-3" />
            <Slide className="inicio-slide" />
        </div>
        <div className="jumbotron bg-white">
            <div className="row">
                <div className="col-12 col-md-8">
                    <h2>Valores</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, a nulla impedit sunt, delectus dignissimos autem saepe, beatae iure laboriosam tenetur fugit nisi provident nemo dolore aut veniam. Eaque, voluptatum.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe vero, debitis officia est iste ut necessitatibus quas dolorem vitae fugiat sunt sapiente tempora, doloremque quisquam eos totam asperiores excepturi temporel.
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <div className="card bg-light mb-3">
                        <div className="card-header">Calendario de Actividades</div>
                        <div className="card-body">
                            <h4 className="card-title">Septiembre</h4>
                            <ul className="card-text">
                                <li>Activity 1</li>
                                <li>Activity 2</li>
                                <li>Activity 3</li>
                                <li>Activity 4</li>
                                <li>Activity 5</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Inicio;