import { Container, Separator } from "./styles";

import ClipboardIcon from "../../../../assets/Clipboard.svg";

export function EmptyList() {
  return (
    <>
      <Separator />
      <Container>
        <img src={ClipboardIcon} alt="ClipboardIcon" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </Container>
    </>
  )
}