// pages/tutorial-reo2fpkg.jsx
import React, { useState, useEffect } from 'react';

export default function TutorialREO2fpkg() {
  const [bootLines, setBootLines] = useState([]);
  const [activeStep, setActiveStep] = useState(null);

  const bootSequence = [
    '> initializing terminal...',
    '> loading kernel modules [OK]',
    '> mounting /dev/ps4homebrew [OK]',
    '> access granted. welcome, operator.',
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootSequence.length) {
        setBootLines((prev) => [...prev, bootSequence[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 400);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: '01',
      title: 'OBTER AS ISOs',
      desc: 'Baixe as imagens ISO dos dois jogos nas versões americanas (NTSC-U). Use os Title-IDs abaixo como referência para garantir compatibilidade.',
      items: [
        { label: 'Resident Evil: Outbreak (File #1)', id: 'SLUS-20765' },
        { label: 'Resident Evil: Outbreak: File #2', id: 'SLUS-20984' },
      ],
      note: 'A versão v1.01 ou v2.00 do File #1 é a mais testada. Prefira sempre NTSC-U.',
    },
    {
      id: '02',
      title: 'RENOMEAR OS ARQUIVOS',
      desc: 'Para que o PS2-FPKG reconheça o pacote como multi-disco, renomeie as ISOs na ordem correta.',
      code: `disc01.iso  →  Resident Evil Outbreak (File #1)\ndisc02.iso  →  Resident Evil Outbreak (File #2)`,
    },
    {
      id: '03',
      title: 'EXECUTAR O PS2-FPKG',
      desc: 'Abra o arquivo ps2-fpkg.exe no Windows. A ferramenta não requer instalação — basta executar.',
      code: `C:\\tools\\ps2-fpkg\\ps2-fpkg.exe`,
    },
    {
      id: '04',
      title: 'SELECIONAR AS ISOs',
      desc: 'Na aba "General", defina a ISO principal no campo Disc1. Depois clique em "Add Disc" e insira a segunda ISO. A ferramenta suporta até 5 discos em um único PKG.',
      bullets: [
        'Disc1 → disc01.iso',
        'Add Disc → disc02.iso',
        'Personalize ícone, fundo e nome do título se desejar',
      ],
    },
    {
      id: '05',
      title: 'APLICAR PATCHES DE VÍDEO',
      desc: 'Ainda no PS2-FPKG, vá até a aba "Graphics" e marque a opção para habilitar widescreen. Isso aplica patches de 16:9 automaticamente.',
      code: `[x] Add Widescreen Patches`,
    },
    {
      id: '06',
      title: 'GERAR O PKG',
      desc: 'Clique em "Create fPKG", escolha a pasta de destino e aguarde o término do processo. O arquivo final terá a extensão .pkg.',
      code: `output: RESIDENT_EVIL_OUTBREAK.pkg`,
    },
    {
      id: '07',
      title: 'INSTALAR NO PS4',
      desc: 'Transfira o .pkg para um pendrive (exFAT) e instale via Package Installer no PS4 desbloqueado (GoldHEN ou similar).',
      bullets: [
        'Copie o .pkg para a raiz do pendrive',
        'No PS4: Settings → GoldHEN → Package Installer',
        'Selecione o arquivo e aguarde a instalação',
      ],
    },
    {
      id: '08',
      title: 'TROCAR DE DISCO EM JOGO',
      desc: 'Com o jogo aberto, segure o botão PS do controle para abrir o menu e selecione a opção de troca de disco para alternar entre File #1 e File #2.',
      code: `[PS BUTTON] → Change Discs → disc02`,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4 md:p-8 relative overflow-hidden">
      {/* Matrix-style background grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,255,100,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,100,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Scanline effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0,255,100,0.15) 0px, rgba(0,255,100,0.15) 1px, transparent 1px, transparent 3px)',
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Terminal window */}
        <div className="border border-green-500/40 rounded-lg bg-black/80 backdrop-blur shadow-[0_0_30px_rgba(0,255,100,0.15)]">
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-green-500/40 bg-green-500/5">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-4 text-xs text-green-300/70 tracking-widest">
              root@ps4-jailbreak:~/outbreak_conversion
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-5 md:p-8 space-y-6">
            {/* Boot lines */}
            <div className="space-y-1 text-xs text-green-500/70">
              {bootLines.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
              <span className="inline-block w-2 h-4 bg-green-400 animate-pulse align-middle" />
            </div>

            {/* Header */}
            <header className="border-l-4 border-green-400 pl-4 py-2">
              <h1 className="text-2xl md:text-4xl font-bold text-green-300 tracking-widest drop-shadow-[0_0_10px_rgba(0,255,100,0.6)]">
                RESIDENT EVIL OUTBREAK
              </h1>
              <p className="text-sm md:text-base text-green-500/80 mt-1 tracking-wide">
                // PS2 → PS4 JAILBREAK CONVERSION GUIDE
              </p>
              <p className="text-xs text-green-500/50 mt-1">
                v1.0 · multi-disc pkg builder · NTSC-U
              </p>
            </header>

            {/* Warning banner */}
            <div className="border border-yellow-500/50 bg-yellow-500/5 rounded p-4 text-yellow-300 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-xl">⚠</span>
                <div>
                  <p className="font-bold tracking-wider">
                    [!] AVISO DE OPERAÇÃO
                  </p>
                  <p className="text-yellow-200/80 mt-1">
                    Este guia requer um PS4 desbloqueado (GoldHEN ou
                    equivalente). Baixe as ISOs apenas de fontes de preservação
                    legítima. Você é responsável pelo uso do conteúdo.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION: TOOLS */}
            <section className="space-y-4">
              <h2 className="text-lg md:text-xl text-green-300 tracking-widest border-b border-green-500/30 pb-2">
                {'>>'} SECTION 01 · FERRAMENTAS NECESSÁRIAS
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-green-500/40 rounded p-4 bg-green-500/5 hover:bg-green-500/10 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-green-300 font-bold">PS2-FPKG</h3>
                    <span className="text-xs bg-green-400 text-black px-2 py-0.5 rounded font-bold">
                      v0.7-BETA
                    </span>
                  </div>
                  <p className="text-sm text-green-400/80 mb-3">
                    Ferramenta oficial para converter ISOs de PS2 em pacotes
                    .pkg para PS4. Suporta multi-disco, widescreen patches e
                    injeção de configs.
                  </p>
                  <a
                    href="https://www.psx-place.com/resources/ps2-fpkg.1628/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-green-300 underline decoration-dotted hover:text-green-100 hover:decoration-solid transition"
                  >
                    <span>$</span> wget ps2-fpkg @ psx-place.com
                  </a>
                </div>

                <div className="border border-green-500/40 rounded p-4 bg-green-500/5 hover:bg-green-500/10 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-green-300 font-bold">
                      TUTORIAL EM VÍDEO
                    </h3>
                    <span className="text-xs bg-green-400 text-black px-2 py-0.5 rounded font-bold">
                      REFERÊNCIA
                    </span>
                  </div>
                  <p className="text-sm text-green-400/80 mb-3">
                    Guia visual completo produzido por MrMario2011 sobre o uso
                    do PS2-FPKG para rodar clássicos de PS2 no PS4 desbloqueado.
                  </p>
                  <p className="text-xs text-green-500/70">
                    Procure por: "MrMario2011 PS2-FPKG PS4"
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION: GAME VERSIONS */}
            <section className="space-y-4">
              <h2 className="text-lg md:text-xl text-green-300 tracking-widest border-b border-green-500/30 pb-2">
                {'>>'} SECTION 02 · VERSÕES EXATAS DOS JOGOS
              </h2>

              <p className="text-sm text-green-400/80">
                Use as versões americanas (NTSC-U). São as mais testadas pela
                comunidade e com compatibilidade confirmada no emulador oficial
                de PS2 do PS4.
              </p>

              <div className="overflow-x-auto border border-green-500/40 rounded">
                <table className="w-full text-sm">
                  <thead className="bg-green-500/10 text-green-300">
                    <tr>
                      <th className="text-left p-3 tracking-wider">JOGO</th>
                      <th className="text-left p-3 tracking-wider">REGIÃO</th>
                      <th className="text-left p-3 tracking-wider">TITLE-ID</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-green-500/20">
                    <tr className="hover:bg-green-500/5">
                      <td className="p-3">Resident Evil: Outbreak (File #1)</td>
                      <td className="p-3 text-green-500/70">USA (NTSC-U)</td>
                      <td className="p-3 text-green-300 font-bold">
                        SLUS-20765
                      </td>
                    </tr>
                    <tr className="hover:bg-green-500/5">
                      <td className="p-3">Resident Evil: Outbreak: File #2</td>
                      <td className="p-3 text-green-500/70">USA (NTSC-U)</td>
                      <td className="p-3 text-green-300 font-bold">
                        SLUS-20984
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="border border-green-500/30 bg-green-500/5 rounded p-3 text-xs text-green-400/80">
                <span className="text-green-300 font-bold">[NOTA]</span> A
                versão v1.01 ou v2.00 do File #1 é a mais estável. A versão PAL
                também pode funcionar, mas a NTSC-U é a mais reportada como 100%
                jogável.
              </div>
            </section>

            {/* SECTION: STEPS */}
            <section className="space-y-4">
              <h2 className="text-lg md:text-xl text-green-300 tracking-widest border-b border-green-500/30 pb-2">
                {'>>'} SECTION 03 · CONVERSÃO PASSO A PASSO
              </h2>

              <div className="space-y-3">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`border rounded transition-all duration-200 cursor-pointer ${
                      activeStep === step.id
                        ? 'border-green-400 bg-green-500/10 shadow-[0_0_20px_rgba(0,255,100,0.2)]'
                        : 'border-green-500/30 bg-green-500/5 hover:border-green-500/60'
                    }`}
                    onClick={() =>
                      setActiveStep(activeStep === step.id ? null : step.id)
                    }
                  >
                    <div className="flex items-center gap-4 p-4">
                      <span
                        className={`text-2xl font-bold ${
                          activeStep === step.id
                            ? 'text-green-300'
                            : 'text-green-500/60'
                        }`}
                      >
                        [{step.id}]
                      </span>
                      <h3 className="text-green-300 tracking-wider font-bold flex-1">
                        {step.title}
                      </h3>
                      <span className="text-green-500/60 text-xs">
                        {activeStep === step.id ? '[-]' : '[+]'}
                      </span>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeStep === step.id ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="px-4 pb-4 pl-16 space-y-3 text-sm">
                        <p className="text-green-400/90">{step.desc}</p>

                        {step.code && (
                          <pre className="bg-black/60 border border-green-500/30 rounded p-3 text-green-300 text-xs overflow-x-auto">
                            <code>{step.code}</code>
                          </pre>
                        )}

                        {step.bullets && (
                          <ul className="space-y-1 text-green-400/80">
                            {step.bullets.map((b, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="text-green-500">›</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {step.items && (
                          <div className="space-y-1">
                            {step.items.map((item, i) => (
                              <div
                                key={i}
                                className="flex justify-between border border-green-500/20 rounded px-3 py-2 bg-black/40"
                              >
                                <span className="text-green-400/90">
                                  {item.label}
                                </span>
                                <span className="text-green-300 font-bold">
                                  {item.id}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {step.note && (
                          <p className="text-xs text-yellow-300/80 border-l-2 border-yellow-500/50 pl-3">
                            {step.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION: TROUBLESHOOTING */}
            <section className="space-y-4">
              <h2 className="text-lg md:text-xl text-green-300 tracking-widest border-b border-green-500/30 pb-2">
                {'>>'} SECTION 04 · TROUBLESHOOTING
              </h2>

              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="border border-green-500/30 rounded p-4 bg-green-500/5">
                  <p className="text-green-300 font-bold mb-1">
                    ▸ Jogo não inicia
                  </p>
                  <p className="text-green-400/70 text-xs">
                    Verifique se o PS2-FPKG aplicou o config automático. Sem
                    ele, o emulador pode travar na tela de boot.
                  </p>
                </div>
                <div className="border border-green-500/30 rounded p-4 bg-green-500/5">
                  <p className="text-green-300 font-bold mb-1">
                    ▸ Áudio dessincronizado em FMVs
                  </p>
                  <p className="text-green-400/70 text-xs">
                    Problema conhecido e menor no File #1. Não impede a
                    conclusão do jogo.
                  </p>
                </div>
                <div className="border border-green-500/30 rounded p-4 bg-green-500/5">
                  <p className="text-green-300 font-bold mb-1">
                    ▸ Tela preta após instalar
                  </p>
                  <p className="text-green-400/70 text-xs">
                    Confirme que o PKG foi instalado via GoldHEN e que o jogo
                    está na região correta (NTSC-U).
                  </p>
                </div>
                <div className="border border-green-500/30 rounded p-4 bg-green-500/5">
                  <p className="text-green-300 font-bold mb-1">
                    ▸ Link do PKG antigo offline
                  </p>
                  <p className="text-green-400/70 text-xs">
                    O PKG original do fórum Ayakamods foi removido. Converta
                    você mesmo seguindo este guia — é o método mais confiável.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-green-500/30 pt-4 flex flex-col md:flex-row justify-between gap-2 text-xs text-green-500/60">
              <span>{'>'} end of transmission</span>
              <span className="flex items-center gap-2">
                status: <span className="text-green-400">COMPATÍVEL</span>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </span>
            </footer>
          </div>
        </div>

        {/* Bottom decorative line */}
        <p className="text-center text-xs text-green-500/40 mt-4 tracking-widest">
          [ ps2 classics emulator · goldhen · ntsc-u · multi-disc pkg ]
        </p>
      </div>
    </div>
  );
}
