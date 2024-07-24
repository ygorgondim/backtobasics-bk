import imgCircleCross from "../assets/circle-cross.svg";
import img01 from "../assets/img-01.png";

const Section01 = () => {
  return (
  <>
    {/*SECTION 1*/}
    <div className="flex flex-col items-center p-10 bg-gradient-to-b from-[#CDDFE9] from-0% to-[#F0F1FA] to-100%">
    <img src={imgCircleCross} className="w-52"></img>
    <div className="flex flex-col gap-4 p-10 bg-white rounded-3xl max-w-lg">
      <span className="font-fontHenriette text-3xl leading-8">
        Uma <span className="font-bold italic">única</span> e <br />{" "}
        <span className="font-bold italic">simples solução</span>
      </span>

      <div className="flex flex-col gap-2 font-fontPrentonRP text-sm">
        <p>
          Ao longo de 2 mil anos, a Igreja e os católicos já enfrentaram
          toda sorte de crises e problemas, e sempre tiveram meios de sair
          mais fortalecidos, porque o remédio continua o mesmo desde sempre:{" "}
          <span className="font-bold italic">
            voltar à fé católica no seu estado mais puro e simples.
          </span>
        </p>
        <p>
          Foi isso que eu, Bernardo, descobri após uma década de estudos,
          vivendo a fé católica e ensinando-a para milhares de pessoas.{" "}
          <span className="font-bold italic">
            Está na sabedoria de sempre da Igreja tudo que você precisa para
            dar o seu próximo passo na fé, e eu me disponho a te acompanhar
            nessa jornada.
          </span>
        </p>
        <p>
          No Back to Basics você receberá o essencial para viver a fé
          católica com plenitude, sem invencionice, sem mirabolância e sem
          complicação.
        </p>
      </div>

      <a
        href="#"
        className="font-fontPrentonRPC py-3 rounded-md font-bold text-white text-center  bg-gradient-to-b from-[#7CF670] to-[#21D933] from-0% to-100%  hover:from-[#21D933] hover:to-[#7CF670]"
      >
        QUERO VIVER A MINHA FÉ COM SIMPLICIDADE!
      </a>
    </div>
  </div>

  <div className="flex flex-col items-center gap-6 p-10 pb-0 bg-[#F0F1FA] bg-[url('./assets/gradient-bg.png')] bg-[length:210%] bg-no-repeat bg-[center_bottom_-6rem] md:bg-[center_bottom_-30rem]">
    <span className="font-fontHenriette text-3xl leading-8 text-center max-w-lg">
      Com o <span className="font-bold italic">Back to Basics</span>, você
      aprende a viver a fé na prática, sem deixar de viver a sua vida.
    </span>
    <span className="font-fontPrentonRP text-center max-w-lg md:px-12">
      Com apenas <span className="font-bold">15 minutos por dia</span>, você{" "}
      <span className="font-bold">
        transformará a sua forma de viver a fé católica
      </span>{" "}
      em <span className="font-bold">apenas um mês</span>.
    </span>

    <img src={img01} className="md:max-w-lg"></img>
  </div>

  {/*END OF SECTION 1*/}
</>
  )
}

export default Section01