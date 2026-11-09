import { useState } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';

const moeda = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export default function SalaryTable({ cargos }) {
  const [busca, setBusca] = useState('');
  const [selecionado, setSelecionado] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const filtrados = cargos.filter((c) => c.cargo.toLowerCase().includes(busca.trim().toLowerCase()));

  function abrir(cargo) {
    setSelecionado(cargo);
    setMostrarModal(true);
  }

  return (
    <>
      <Form.Group className="mb-4" controlId="busca-cargo">
        <Form.Label>Buscar cargo</Form.Label>
        <Form.Control
          type="search"
          placeholder="Ex.: Desenvolvedor, DBA, DevOps"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </Form.Group>

      <Table bordered hover responsive striped className="align-middle">
        <thead className="table-dark">
          <tr>
            <th>Cargo</th>
            <th>Piso 2026</th>
            <th>Reajuste</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filtrados.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center text-secondary">Nenhum cargo encontrado.</td>
            </tr>
          ) : (
            filtrados.map((c) => (
              <tr key={c.id}>
                <td>{c.cargo}</td>
                <td>{moeda(c.piso)}</td>
                <td>{c.reajuste.toLocaleString('pt-BR')}%</td>
                <td>
                  <Button size="sm" variant="primary" className="text-nowrap" onClick={() => abrir(c)}>
                    Ver Detalhes/Carga Horária
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      {/* selecionado continua preenchido durante a animação de fechar */}
      <Modal show={mostrarModal} onHide={() => setMostrarModal(false)} centered>
        <Modal.Header closeButton closeVariant="white" className="bg-primary text-white">
          <Modal.Title>{selecionado?.cargo}</Modal.Title>
        </Modal.Header>
        {selecionado && (
          <Modal.Body>
            <p>{selecionado.descricao}</p>
            <dl className="row mb-0">
              <dt className="col-sm-5">Piso 2026</dt>
              <dd className="col-sm-7">{moeda(selecionado.piso)}</dd>
              <dt className="col-sm-5">Reajuste</dt>
              <dd className="col-sm-7">{selecionado.reajuste.toLocaleString('pt-BR')}%</dd>
              <dt className="col-sm-5">Piso reajustado</dt>
              <dd className="col-sm-7">{moeda(selecionado.piso * (1 + selecionado.reajuste / 100))}</dd>
              <dt className="col-sm-5">Carga horária</dt>
              <dd className="col-sm-7">{selecionado.cargaHoraria}</dd>
            </dl>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setMostrarModal(false)}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
