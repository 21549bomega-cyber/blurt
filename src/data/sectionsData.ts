// GCSE AQA Chemistry - 8 Base Topics
// Topic 1 is fully populated with user's revision notes
// Topics 2-8 show "Nothing here — please wait for update" placeholder

export interface PracticeItem {
  id: string;
  prompt_template: string;
  type: "open" | "short-answer" | "mcq";
  difficulty: "easy" | "medium" | "hard";
  randomise: boolean;
  expected_keywords: string[]; // Keywords specific to this question
}

export interface Subsection {
  id: string;
  title: string;
  type: "content" | "practice-group";
  content_html: string;
  canonical_keywords: string[];
  practice_items: PracticeItem[];
}

export interface TopicSection {
  id: string;
  title: string;
  status: "ready" | "coming_soon";
  subsections: Subsection[];
}

export const sectionsData: TopicSection[] = [
  {
    id: "atomic-structure",
    title: "Atomic structure & periodic table",
    status: "ready",
    subsections: [
      {
        id: "1-1-1-atoms-elements-compounds",
        title: "1.1.1 ATOMS, ELEMENTS AND COMPOUNDS",
        type: "content",
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – What is an Atom?</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>An atom is the smallest particle of an element that can exist. Every atom consists of a nucleus (containing protons and neutrons) and electrons arranged in shells around it.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Facts</h4>
    <ul>
      <li>All substances are made of atoms.</li>
      <li>Atoms are neutral overall (same number of protons and electrons).</li>
      <li>The atom's nucleus makes up almost all of its mass.</li>
      <li>Atoms are incredibly small — radius ≈ 0.1 nanometres (1 × 10⁻¹⁰ m).</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🟢 Example</h4>
    <p>A single atom of hydrogen (H) has: 1 proton, 0 neutrons, 1 electron.</p>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>When asked "What is an atom?", always include: ✅ smallest part of an element and ✅ that can exist.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – What is an Element?</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>An element is a pure substance that contains only one type of atom.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Points</h4>
    <ul>
      <li>Each element is represented by a chemical symbol (e.g. O for oxygen, Na for sodium).</li>
      <li>There are about 100 known elements, shown in the Periodic Table.</li>
      <li>Elements can be classified as metals or non-metals depending on properties.</li>
      <li>The periodic table arranges elements by increasing atomic number (number of protons).</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🟢 Examples</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Element</th>
          <th>Symbol</th>
          <th>Metal/Non-metal</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hydrogen</td>
          <td>H</td>
          <td>Non-metal</td>
          <td>Lightest element</td>
        </tr>
        <tr>
          <td>Sodium</td>
          <td>Na</td>
          <td>Metal</td>
          <td>Reactive Group 1 element</td>
        </tr>
        <tr>
          <td>Chlorine</td>
          <td>Cl</td>
          <td>Non-metal</td>
          <td>Poisonous green gas</td>
        </tr>
        <tr>
          <td>Iron</td>
          <td>Fe</td>
          <td>Metal</td>
          <td>Forms rust (iron oxide)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>If asked to "define an element", always mention atoms are all the same type.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – What is a Compound?</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>A compound is a substance formed when two or more elements are chemically bonded together in fixed proportions.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Points</h4>
    <ul>
      <li>Compounds contain more than one type of atom.</li>
      <li>They can only be separated by chemical reactions, not physical methods.</li>
      <li>The properties of a compound are different from those of the elements it's made from.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🟢 Examples</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Compound</th>
          <th>Elements Involved</th>
          <th>Type of Bond</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Water (H₂O)</td>
          <td>Hydrogen + Oxygen</td>
          <td>Covalent</td>
          <td>Liquid at room temp</td>
        </tr>
        <tr>
          <td>Sodium Chloride (NaCl)</td>
          <td>Sodium + Chlorine</td>
          <td>Ionic</td>
          <td>Solid salt crystals</td>
        </tr>
        <tr>
          <td>Carbon Dioxide (CO₂)</td>
          <td>Carbon + Oxygen</td>
          <td>Covalent</td>
          <td>Colourless gas</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Use "chemically joined" not "mixed" — compounds involve bonding, mixtures don't.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Naming Rules for Compounds</h3>
  
  <div class="definition-block">
    <h4>🔵 Basic Rules</h4>
    <ul>
      <li><strong>Metal + Non-Metal = Ionic Compound</strong> - Ending changes to "-ide". Example: Sodium + Chlorine → Sodium Chloride</li>
      <li><strong>If Oxygen is Included → "-ate"</strong> - Example: Copper + Sulfur + Oxygen → Copper Sulfate</li>
      <li><strong>Non-Metals Only = Covalent Compound</strong> - Use prefixes to show number of atoms: mono = 1, di = 2, tri = 3, tetra = 4. Example: CO₂ = Carbon Dioxide</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🟢 Examples</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Formula</th>
          <th>Name</th>
          <th>Type of Compound</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>NaCl</td>
          <td>Sodium Chloride</td>
          <td>Ionic</td>
        </tr>
        <tr>
          <td>H₂O</td>
          <td>Water</td>
          <td>Covalent</td>
        </tr>
        <tr>
          <td>MgO</td>
          <td>Magnesium Oxide</td>
          <td>Ionic</td>
        </tr>
        <tr>
          <td>CO</td>
          <td>Carbon Monoxide</td>
          <td>Covalent</td>
        </tr>
        <tr>
          <td>CuSO₄</td>
          <td>Copper Sulfate</td>
          <td>Ionic</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Always check for oxygen — it's the clue for "-ate".</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Writing Formulae and Equations</h3>
  
  <div class="definition-block">
    <h4>🔵 Step 1: Write the Symbols</h4>
    <p>Identify each element and write its symbol. Example: Sodium reacts with chlorine → Na + Cl.</p>
  </div>

  <div class="definition-block">
    <h4>🔵 Step 2: Balance the Charges</h4>
    <p>Combine ions so total charge = 0.</p>
    <table class="data-table">
      <thead>
        <tr>
          <th>Ion</th>
          <th>Charge</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Na⁺</td>
          <td>+1</td>
        </tr>
        <tr>
          <td>Cl⁻</td>
          <td>–1</td>
        </tr>
      </tbody>
    </table>
    <p>→ NaCl (charges cancel)</p>
  </div>

  <div class="definition-block">
    <h4>🔵 Step 3: Write the Formula</h4>
    <p>Combine elements in the correct ratio.</p>
    <p><strong>Examples:</strong></p>
    <ul>
      <li>Magnesium Oxide = Mg²⁺ + O²⁻ → MgO</li>
      <li>Calcium Chloride = Ca²⁺ + 2Cl⁻ → CaCl₂</li>
    </ul>
  </div>

  <div class="warning-block">
    <h4>🔴 Balanced Chemical Equation</h4>
    <p><strong>Example:</strong> 2Na + Cl₂ → 2NaCl (always ensure same number of atoms each side)</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Word Equation</h4>
    <p><strong>Example:</strong> Sodium + Chlorine → Sodium Chloride</p>
  </div>

  <div class="example-block">
    <h4>🟢 State Symbols</h4>
    <ul>
      <li>(s) = solid</li>
      <li>(l) = liquid</li>
      <li>(g) = gas</li>
      <li>(aq) = aqueous solution</li>
    </ul>
    <p><strong>Example with states:</strong> 2Na (s) + Cl₂ (g) → 2NaCl (s)</p>
  </div>
</div>
        `,
        canonical_keywords: [
          "atom", "nucleus", "proton", "neutron", "electron", "shells",
          "element", "chemical symbol", "periodic table", "metal", "non-metal",
          "compound", "chemical bond", "formula", "ionic", "covalent",
          "naming compounds", "-ide", "-ate", "balanced equation", "state symbols"
        ],
        practice_items: [
          {
            id: "p1",
            prompt_template: "Write everything you know about ATOMS, ELEMENTS AND COMPOUNDS.",
            type: "open",
            difficulty: "easy",
            randomise: true,
            expected_keywords: [
              "atom", "smallest particle", "nucleus", "proton", "neutron", "electron", "shells",
              "element", "one type", "chemical symbol", "periodic table",
              "compound", "chemically bonded", "fixed proportions", "formula"
            ]
          },
          {
            id: "p2",
            prompt_template: "Explain the key ideas and examples from atoms, elements and compounds.",
            type: "open",
            difficulty: "easy",
            randomise: true,
            expected_keywords: [
              "atom", "nucleus", "electron", "element", "compound", "chemical bond",
              "hydrogen", "oxygen", "sodium", "water", "sodium chloride", "ionic", "covalent"
            ]
          },
          {
            id: "p3",
            prompt_template: "List the definitions, facts and examples you can recall about atoms, elements and compounds.",
            type: "open",
            difficulty: "easy",
            randomise: true,
            expected_keywords: [
              "atom", "smallest", "element", "pure substance", "compound", "two or more",
              "chemically joined", "neutral", "mass", "radius", "nanometre"
            ]
          },
          {
            id: "p4",
            prompt_template: "Define an element and give one example with its symbol.",
            type: "short-answer",
            difficulty: "easy",
            randomise: true,
            expected_keywords: [
              "element", "pure substance", "one type of atom", "symbol"
            ]
          },
          {
            id: "p5",
            prompt_template: "State the difference between an element and a compound.",
            type: "short-answer",
            difficulty: "medium",
            randomise: true,
            expected_keywords: [
              "element", "one type", "compound", "two or more", "chemically bonded", "fixed proportions"
            ]
          },
          {
            id: "p6",
            prompt_template: "Explain how to write a formula for an ionic compound (example NaCl).",
            type: "short-answer",
            difficulty: "medium",
            randomise: true,
            expected_keywords: [
              "ions", "charge", "balance", "metal", "non-metal", "positive", "negative", "formula"
            ]
          },
          {
            id: "p7",
            prompt_template: "Give the naming rule for compounds containing oxygen.",
            type: "short-answer",
            difficulty: "easy",
            randomise: true,
            expected_keywords: [
              "oxygen", "-ate", "ending", "sulfate", "carbonate", "nitrate"
            ]
          }
        ]
      },
      {
        id: "1-1-2-mixtures",
        title: "1.1.2 MIXTURES",
        type: "content",
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – What is a Mixture?</h3>
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>A mixture is a combination of two or more substances (elements or compounds) not chemically joined together.</p>
  </div>
  <div class="key-facts-block">
    <h4>🧠 Key Points</h4>
    <ul>
      <li>The substances in a mixture keep their own properties.</li>
      <li>There are no chemical bonds between the substances.</li>
      <li>Mixtures can be easily separated by physical methods.</li>
      <li>The composition of a mixture can vary (unlike a compound).</li>
    </ul>
  </div>
  <div class="example-block">
    <h4>🟢 Examples</h4>
    <table class="data-table">
      <thead><tr><th>Mixture</th><th>Components</th><th>Notes</th></tr></thead>
      <tbody>
        <tr><td>Air</td><td>Nitrogen, Oxygen, CO₂, Argon, etc.</td><td>Gas mixture</td></tr>
        <tr><td>Sea Water</td><td>Water + Dissolved Salts</td><td>Can be separated by distillation</td></tr>
        <tr><td>Crude Oil</td><td>Many Hydrocarbons</td><td>Can be separated by fractional distillation</td></tr>
      </tbody>
    </table>
  </div>
  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Never say "a mixture is chemically joined." Always write: "A mixture is a physical combination of substances."</p>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Mixtures vs Compounds</h3>
  <div class="example-block">
    <table class="data-table">
      <thead><tr><th>Property</th><th>Mixture</th><th>Compound</th></tr></thead>
      <tbody>
        <tr><td>Joined by</td><td>Physical mixing</td><td>Chemical bonds</td></tr>
        <tr><td>Separation</td><td>Physical methods</td><td>Chemical reactions</td></tr>
        <tr><td>Composition</td><td>Variable</td><td>Fixed ratio</td></tr>
        <tr><td>Properties</td><td>Same as original substances</td><td>New properties formed</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Filtration</h3>
  <div class="definition-block">
    <h4>🔵 Purpose</h4>
    <p>To separate an insoluble solid from a liquid.</p>
  </div>
  <div class="key-facts-block">
    <h4>🧠 Apparatus</h4>
    <p>Beaker, Funnel, Filter paper</p>
  </div>
  <div class="key-facts-block">
    <h4>🧩 Method</h4>
    <p>Place the filter paper inside the funnel. Pour the mixture into the funnel slowly. The liquid (filtrate) passes through the paper. The solid (residue) remains on the filter paper.</p>
  </div>
  <div class="example-block">
    <h4>🟢 Example</h4>
    <p>Separating sand from a sand-water mixture.</p>
  </div>
  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Use terms "filtrate" (liquid) and "residue" (solid) correctly — they're often marks in 6-mark practical questions.</p>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Crystallisation</h3>
  <div class="definition-block">
    <h4>🔵 Purpose</h4>
    <p>Used to obtain a soluble solid from a solution.</p>
  </div>
  <div class="key-facts-block">
    <h4>Method</h4>
    <p>Heat the solution gently to evaporate water until it becomes concentrated. Stop heating when crystals begin to form. Allow the solution to cool slowly. Filter and dry the crystals.</p>
  </div>
  <div class="example-block">
    <h4>🟢 Example</h4>
    <p>Separating salt from saltwater.</p>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Simple Distillation</h3>
  <div class="definition-block">
    <h4>🔵 Purpose</h4>
    <p>Used to separate a solvent from a solution (e.g. water from salty water).</p>
  </div>
  <div class="key-facts-block">
    <h4>Method</h4>
    <p>Heat the solution in a flask. The liquid with the lowest boiling point evaporates first. The vapour passes into the condenser and cools. The condensed pure liquid (distillate) is collected.</p>
  </div>
  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Always write: "Cold water enters the condenser at the bottom and leaves at the top — this ensures efficient cooling."</p>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Fractional Distillation</h3>
  <div class="definition-block">
    <h4>🔵 Purpose</h4>
    <p>Used to separate two or more liquids that are miscible (mix completely) and have different boiling points.</p>
  </div>
  <div class="key-facts-block">
    <h4>Method</h4>
    <p>Heat the mixture in a flask. The vapour rises through the fractionating column. As it cools, vapours condense at different heights. Each liquid (fraction) is collected separately.</p>
  </div>
  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Always mention the temperature gradient — this is a common AQA mark point.</p>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – Paper Chromatography</h3>
  <div class="definition-block">
    <h4>🔵 Purpose</h4>
    <p>Used to separate and identify mixtures of soluble substances, especially dyes or inks.</p>
  </div>
  <div class="key-facts-block">
    <h4>Method</h4>
    <p>Draw a pencil baseline on the paper. Place small dots of the mixture (e.g. ink) on the line. Dip the paper into solvent (below the pencil line). As solvent moves up, different substances travel different distances. Calculate the Rf value for identification.</p>
  </div>
  <div class="key-facts-block">
    <h4>🟢 Key Terms</h4>
    <ul>
      <li>Solvent front – the highest point reached by solvent.</li>
      <li>Rf value = distance moved by substance ÷ distance moved by solvent.</li>
    </ul>
  </div>
  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Always use pencil, not pen, for the baseline (ink dissolves). Solvent must be below the baseline or the samples will dissolve into it.</p>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 8 – Choosing Separation Techniques</h3>
  <div class="example-block">
    <table class="data-table">
      <thead><tr><th>Type of Mixture</th><th>Suitable Process</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>Insoluble solid + liquid</td><td>Filtration</td><td>Sand + water</td></tr>
        <tr><td>Soluble solid + liquid</td><td>Crystallisation</td><td>Salt from solution</td></tr>
        <tr><td>Solvent from solution</td><td>Simple distillation</td><td>Water from saltwater</td></tr>
        <tr><td>Two miscible liquids</td><td>Fractional distillation</td><td>Ethanol + water</td></tr>
        <tr><td>Soluble coloured substances</td><td>Chromatography</td><td>Ink pigments</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 9 – Purity and Melting Point</h3>
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>A pure substance is a single element or compound not mixed with any other substance.</p>
  </div>
  <div class="key-facts-block">
    <h4>🧠 Key Points</h4>
    <ul>
      <li>Pure substances melt and boil at fixed temperatures.</li>
      <li>Mixtures melt/boil over a range of temperatures.</li>
    </ul>
  </div>
</div>
        `,
        canonical_keywords: [
          "mixture", "physical combination", "filtration", "residue", "filtrate",
          "crystallisation", "evaporation", "simple distillation", "fractional distillation",
          "chromatography", "Rf value", "solvent front", "purity", "melting point"
        ],
        practice_items: [
          {
            id: "p1",
            prompt_template: "Write everything you know about MIXTURES and separation techniques.",
            type: "open",
            difficulty: "medium",
            randomise: true,
            expected_keywords: [
              "mixture", "not chemically joined", "physical", "filtration", "crystallisation",
              "distillation", "fractional distillation", "chromatography", "residue", "filtrate",
              "solvent", "purity", "melting point"
            ]
          },
          {
            id: "p2",
            prompt_template: "Explain all the separation methods you can remember with examples.",
            type: "open",
            difficulty: "medium",
            randomise: true,
            expected_keywords: [
              "filtration", "sand", "water", "crystallisation", "salt", "distillation",
              "fractional", "ethanol", "chromatography", "ink", "Rf value"
            ]
          },
          {
            id: "p3",
            prompt_template: "Describe the method for simple distillation.",
            type: "short-answer",
            difficulty: "medium",
            randomise: true,
            expected_keywords: [
              "heat", "evaporate", "boiling point", "condenser", "cool", "distillate", "collect"
            ]
          },
          {
            id: "p4",
            prompt_template: "Explain how paper chromatography works and what Rf values are.",
            type: "short-answer",
            difficulty: "hard",
            randomise: true,
            expected_keywords: [
              "baseline", "pencil", "solvent", "move up", "different distances",
              "Rf value", "distance moved", "substance", "solvent front"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "bonding-structure",
    title: "Bonding, structure & the properties of matter",
    status: "coming_soon",
    subsections: []
  },
  {
    id: "quantitative-chemistry",
    title: "Quantitative chemistry",
    status: "coming_soon",
    subsections: []
  },
  {
    id: "chemical-changes",
    title: "Chemical changes",
    status: "coming_soon",
    subsections: []
  },
  {
    id: "energy-changes",
    title: "Energy changes",
    status: "coming_soon",
    subsections: []
  },
  {
    id: "rate-extent",
    title: "Rate & extent of chemical change",
    status: "coming_soon",
    subsections: []
  },
  {
    id: "organic-chemistry",
    title: "Organic chemistry",
    status: "coming_soon",
    subsections: []
  },
  {
    id: "chemical-analysis",
    title: "Chemical analysis, the atmosphere & using resources",
    status: "coming_soon",
    subsections: []
  }
];
