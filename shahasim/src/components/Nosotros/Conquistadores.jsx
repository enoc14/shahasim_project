import React from 'react';

import conquistadores from '../../images/conquistadores.png';

const Conquistadores = () => {
    return(
        <div className="jumbotron p-first no-mb">
            <div className="row">
                <h2 className="col-12 mb-4" id="conquistadores">¿Qué son los Conquistadores?</h2>
                <img src={conquistadores} alt="Logo Conquistadores" className="img-fluid col-12 col-md-3"/>
                <div className="col-12 col-md-9 text-justify">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, quaerat ea architecto optio minus ad enim rem commodi magnam asperiores laboriosam dolore praesentium tenetur ipsa omnis suscipit reprehenderit pariatur officiis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic, mollitia cumque exercitationem repellat commodi laboriosam asperiores adipisci. Esse odit est, in voluptate rerum praesentium amet soluta nemo vitae ipsam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo unde amet dolore nisi neque architecto eaque eius cumque at. Labore necessitatibus dolore nemo illo quibusdam iure quaerat nesciunt fugiat itaque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, illum similique repellendus amet officia obcaecati voluptas quod perferendis in, tempora beatae dignissimos facere repellat cumque aliquam. Voluptatibus reiciendis eius perferendis?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et similique aliquid quis perspiciatis sed, facilis eligendi. Optio quaerat reprehenderit eius sapiente officiis. Eius eum, mollitia voluptatibus ut ullam dolorum minima?
                </div>
            </div>
        </div>
    )
}

export default Conquistadores;