import { Button, Carousel } from 'react-bootstrap';

export default function NewsCarousel({ noticias }) {
  return (
    <Carousel indicators controls interval={5000} className="rounded overflow-hidden">
      {noticias.map((noticia) => (
        <Carousel.Item key={noticia.id}>
          <img className="d-block w-100 object-fit-cover" style={{ height: 380 }} src={noticia.imagem} alt="" />
          <Carousel.Caption className="pb-5">
            <h3 className="fw-bold">{noticia.titulo}</h3>
            <p className="d-none d-sm-block">{noticia.descricao}</p>
            <Button variant="light" href={noticia.link}>Saiba mais</Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
