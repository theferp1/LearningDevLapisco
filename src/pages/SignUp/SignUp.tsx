import InputSignup from "../../components/SignUp/InputSignup";
import {
  IconUserCheck,
  IconBook,
  IconMapPins,
  IconSettings,
  IconCalendar,
  IconAt,
} from "@tabler/icons-react";
import { Stepper, Group, Button } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useState } from "react";

const SignUp = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <div className="w-screen h-screen bg-[#E5E5E5] flex flex-col gap-8 items-center justify-center">
      <img
        src="/BlackLapiscoLogo.svg"
        alt="Lapisco Logo Preta"
        className="w-[140px] md:w-[170px] select-none"
      />
      <div className="flex flex-col gap-16 items-center justify-center  w-[280px] h-[400px]  sm:w-[600px] sm:h-[400px]  md:w-[730px] md:h-[460px] lg:w-[1300px] lg:h-[700px] bg-white rounded-2xl">
        <Stepper
          color="dark"
          size="xl"
          active={active}
          onStepClick={setActive}
          allowNextStepsSelect={false}
          w={1000}
          className="flex flex-col gap-10"
          mb={0}
        >
          <Stepper.Step icon={<IconUserCheck size="1.4rem" />} label={``}>
            <div className="flex flex-col items-center justify-center w-full gap-5 ">
              <div className="flex gap-10 ">
                <InputSignup
                  placeholder="Nome Completo"
                  label="Nome Completo"
                  error=""
                  withAsterisk
                  size="lg"
                  w={350}
                />
                <InputSignup
                  icon={<IconAt size="1.1rem" />}
                  placeholder="E-mail"
                  label="E-mail"
                  error=""
                  withAsterisk
                  size="lg"
                  w={350}
                />
              </div>
              <div className="flex gap-10 ">
                <DatePickerInput
                  icon={<IconCalendar size="1.1rem" stroke={1.5} />}
                  required
                  label="Data de Nascimento"
                  placeholder="Data de Nascimento"
                  clearable
                  size="lg"
                  w={350}
                />
                <InputSignup
                  placeholder="CPF"
                  label="CPF"
                  error=""
                  withAsterisk
                  size="lg"
                  w={350}
                />
              </div>
              <div className="flex gap-10 ">
                <InputSignup
                  placeholder="RG"
                  label="RG"
                  error=""
                  withAsterisk
                  size="lg"
                  w={350}
                />
                <InputSignup
                  placeholder="Celular(Whatsapp)"
                  label="Celular(Whatsapp)"
                  error=""
                  withAsterisk
                  size="lg"
                  w={350}
                />
              </div>
            </div>
          </Stepper.Step>
          <Stepper.Step icon={<IconBook size="1.4rem" />} label="" />
          <Stepper.Step icon={<IconMapPins size="1.4rem" />} label="" />
          <Stepper.Step icon={<IconSettings size="1.4rem" />} label="" />
          <Stepper.Completed>A</Stepper.Completed>
        </Stepper>
        <Group className="items-center justify-center w-full">
          <Button onClick={prevStep} variant="default">
            Anterior
          </Button>
          <Button onClick={nextStep} variant="default" color="dark">
            Próximo
          </Button>
        </Group>
      </div>
    </div>
  );
};

export default SignUp;
