import React, { useState, useEffect } from "react";
import {
  theme,
  Container,
  SimuladorContainer,
  Header,
  Label,
  SmallerLabel,
  InputLabel,
  ClearFieldsButton,
  SimulateButton,
  ToggleButtonGroupDiv,
  ToggleButtonMui,
  TinyCheckedIcon,
  FirstForm,
  IndexDiv,
  ResultsDiv,
  ResultCardsDiv,
} from "./styles";
import { Input, ThemeProvider } from "@mui/material";
import { CardComponent } from "../../components/CardComponent";
import api from "../../services/api";

export const MainScreen = () => {
  const [alignment, setAlignment] = useState("brute");
  const [indexValue, setIndexValue] = useState("pre");
  const [cdiValue, setCdiValue] = useState("");
  const [ipcaValue, setIpcaValue] = useState("");
  const [initialValue, setInitialValue] = useState("");
  const [months, setMonths] = useState("");
  const [monthlyValue, setMonthlyValue] = useState("");
  const [rentability, setRentability] = useState("");
  const [finalBrute, setFinalBrute] = useState("");
  const [alqIr, setAlqIr] = useState("");
  const [paydIr, setPaydIr] = useState("");
  const [finalLiquid, setFinalLiquid] = useState("");
  const [totalInvested, setTotalInvested] = useState("");
  const [liquidGain, setLiquidGain] = useState("");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const indexChange = (event, newIndexValue) => {
    setIndexValue(newIndexValue);
  };
  async function getData() {
    await api.get("/indicadores").then((res) => {
      setCdiValue(res?.data[0]?.valor);
      setIpcaValue(res?.data[1]?.valor);
    });
  }

  useEffect(() => {
    getData();
  }, []);
  async function calculate() {
    await api.get("/simulacoes").then((res) => {
      if (alignment === "brute" && indexValue === "pre") {
        setFinalBrute(res?.data[0]?.valorFinalBruto);
        setFinalLiquid(res?.data[0]?.valorFinalLiquido);
        setTotalInvested(res?.data[0]?.valorTotalInvestido);
        setLiquidGain(res?.data[0]?.ganhoLiquido);
        setPaydIr(res?.data[0]?.valorPagoIR);
        setAlqIr(res?.data[0]?.aliquotaIR);
      }
      if (alignment === "brute" && indexValue === "pos") {
        setFinalBrute(res?.data[1]?.valorFinalBruto);
        setFinalLiquid(res?.data[1]?.valorFinalLiquido);
        setTotalInvested(res?.data[1]?.valorTotalInvestido);
        setLiquidGain(res?.data[1]?.ganhoLiquido);
        setPaydIr(res?.data[1]?.valorPagoIR);
        setAlqIr(res?.data[1]?.aliquotaIR);
      }
      if (alignment === "brute" && indexValue === "fix") {
        setFinalBrute(res?.data[2]?.valorFinalBruto);
        setFinalLiquid(res?.data[2]?.valorFinalLiquido);
        setTotalInvested(res?.data[2]?.valorTotalInvestido);
        setLiquidGain(res?.data[2]?.ganhoLiquido);
        setPaydIr(res?.data[2]?.valorPagoIR);
        setAlqIr(res?.data[2]?.aliquotaIR);
      }
      if (alignment === "liquid" && indexValue === "pre") {
        setFinalBrute(res?.data[3]?.valorFinalBruto);
        setFinalLiquid(res?.data[3]?.valorFinalLiquido);
        setTotalInvested(res?.data[3]?.valorTotalInvestido);
        setLiquidGain(res?.data[3]?.ganhoLiquido);
        setPaydIr(res?.data[3]?.valorPagoIR);
        setAlqIr(res?.data[3]?.aliquotaIR);
      }
      if (alignment === "liquid" && indexValue === "pos") {
        setFinalBrute(res?.data[4]?.valorFinalBruto);
        setFinalLiquid(res?.data[4]?.valorFinalLiquido);
        setTotalInvested(res?.data[4]?.valorTotalInvestido);
        setLiquidGain(res?.data[4]?.ganhoLiquido);
        setPaydIr(res?.data[4]?.valorPagoIR);
        setAlqIr(res?.data[4]?.aliquotaIR);
      }
      if (alignment === "liquid" && indexValue === "fix") {
        setFinalBrute(res?.data[5]?.valorFinalBruto);
        setFinalLiquid(res?.data[5]?.valorFinalLiquido);
        setTotalInvested(res?.data[5]?.valorTotalInvestido);
        setLiquidGain(res?.data[5]?.ganhoLiquido);
        setPaydIr(res?.data[5]?.valorPagoIR);
        setAlqIr(res?.data[5]?.aliquotaIR);
      }
    });
  }
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Header>Simulador de investimentos</Header>
        <SimuladorContainer>
          <FirstForm>
            <Label>Rendimento</Label>

            <ToggleButtonGroupDiv value={alignment} onChange={handleChange}>
              <ToggleButtonMui value="brute">
                {alignment === "brute" ? <TinyCheckedIcon /> : ""}
                Bruto
              </ToggleButtonMui>
              <ToggleButtonMui value="liquid">
                {alignment === "liquid" ? <TinyCheckedIcon /> : ""}Líquido
              </ToggleButtonMui>
            </ToggleButtonGroupDiv>
            <SmallerLabel>Aporte inicial</SmallerLabel>
            <Input
              type="number"
              color="black"
              onChange={(e) => setInitialValue(e.target.value)}
            />
            <InputLabel>Prazo (em meses)</InputLabel>
            <Input
              color="black"
              onChange={(e) => setMonths(e.target.value)}
              type="number"
            />
            <InputLabel>IPCA (ao ano)</InputLabel>
            <Input color="black" value={ipcaValue} contentEditable={false} />

            <br />

            <ClearFieldsButton style={{ marginTop: "4%" }} color="black">
              Limpar campos
            </ClearFieldsButton>
          </FirstForm>
          <IndexDiv>
            <Label>Tipo de indexação</Label>

            <ToggleButtonGroupDiv value={indexValue} onChange={indexChange}>
              <ToggleButtonMui value="pre">
                {indexValue === "pre" ? <TinyCheckedIcon /> : ""}
                PRÉ
              </ToggleButtonMui>
              <ToggleButtonMui value="pos">
                {indexValue === "pos" ? <TinyCheckedIcon /> : ""}PÓS
              </ToggleButtonMui>

              <ToggleButtonMui value="fix">
                {indexValue === "fix" ? <TinyCheckedIcon /> : ""}FIXADO
              </ToggleButtonMui>
            </ToggleButtonGroupDiv>
            <SmallerLabel>Aporte Mensal</SmallerLabel>
            <Input
              color="black"
              type="number"
              onChange={(e) => setMonthlyValue(e.target.value)}
            />

            <InputLabel>Rentabilidade</InputLabel>
            <Input
              color="black"
              type="number"
              onChange={(e) => setRentability(e.target.value)}
            />
            <InputLabel>CDI (ao ano)</InputLabel>
            <Input color="black" value={cdiValue} contentEditable={false} />
            <br />
            <SimulateButton
              style={{ marginTop: "4%" }}
              color="grey"
              onClick={() => {
                calculate();
              }}
            >
              SIMULAR
            </SimulateButton>
          </IndexDiv>
          <ResultsDiv>
            <Label>Resultado da simulação</Label>
            <ResultCardsDiv>
              <CardComponent
                cardTitle={"Valor final bruto"}
                cardValue={finalBrute}
              />
              <CardComponent cardTitle={"Alquiota do IR"} cardValue={alqIr} />
              <CardComponent
                cardTitle={"Valor pago em IR"}
                cardValue={paydIr}
              />
            </ResultCardsDiv>
            <ResultCardsDiv>
              <CardComponent
                cardTitle={"Valor final líquido"}
                cardValue={finalLiquid}
              />
              <CardComponent
                cardTitle={"Valor total investido"}
                cardValue={totalInvested}
              />
              <CardComponent
                cardTitle={"Ganho líquido"}
                cardValue={liquidGain}
              />
            </ResultCardsDiv>
          </ResultsDiv>
        </SimuladorContainer>
      </ThemeProvider>
    </Container>
  );
};

export default MainScreen;
