import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';
import Titulo from '../styledcomponents/Titulo';


const SocialIconStyled = styled(SocialIcon)`
    margin: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #f5f5f5;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
`;

const Redes = () => {
    const instagram = 'https://www.instagram.com/ivan1arriola/'
    const github = 'https://github.com/ivan1arriola';
    const linkedin = 'https://www.linkedin.com/in/ivan1arriola'



    return (
        <div>

            <Titulo>Mis Links</Titulo>

            <div className="d-inline-flex">
                <SocialIconStyled className='icono' url={instagram} target='_blank' />
                <SocialIconStyled className='icono' url={github} target='_blank' />
                <SocialIconStyled className='icono' url={linkedin} target='_blank' />
            </div>

        </div>
    )

}
export default Redes;