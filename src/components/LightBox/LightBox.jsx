import './LightBox.scss';

export const LightBox = ({active}) => {
    return (
        <div id='container-lightbox' className={`${active ? 'active' : 'hidden' }`}>Tu información fue enviada con éxito, estaremos en contacto
        contigo</div>
    );
}
