export const summaryTables = [
  {
    "title": "Core Formula Table",
    "columns": [
      "Concept",
      "Formula",
      "Unit",
      "Trap"
    ],
    "rows": [
      [
        "Magnetic Field Basics",
        "B = F/(q v sin theta)",
        "tesla (T)",
        "B is a vector; do not treat it as only a scalar number."
      ],
      [
        "Lorentz Force",
        "F = q v B sin theta",
        "newton (N)",
        "Force is zero when v is parallel to B."
      ],
      [
        "Right-Hand Rule",
        "F = q(v x B)",
        "N",
        "For negative charge, force direction reverses."
      ],
      [
        "Motion in Uniform Magnetic Field",
        "r = m v/(q B)",
        "metre (m)",
        "Magnetic force does no work; speed remains constant."
      ],
      [
        "Time Period in Magnetic Field",
        "T = 2 pi m/(q B)",
        "second (s)",
        "Do not put v in the final time period."
      ],
      [
        "Cyclotron",
        "f = q B/(2 pi m)",
        "hertz (Hz)",
        "Relativistic mass change is outside basic NCERT formula."
      ],
      [
        "Velocity Selector",
        "v = E/B",
        "m s^-1",
        "Selected particle moves undeviated only when forces balance."
      ],
      [
        "Force on Current-Carrying Conductor",
        "F = B I l sin theta",
        "N",
        "Use current direction, not electron drift direction."
      ],
      [
        "Force Between Parallel Currents",
        "F/l = mu0 I1 I2/(2 pi d)",
        "N m^-1",
        "Same direction currents attract; opposite direction currents repel."
      ],
      [
        "Definition of Ampere",
        "F/l = 2 x 10^-7 N m^-1",
        "N m^-1",
        "This is a definition-style NCERT fact."
      ]
    ]
  },
  {
    "title": "Graph and Direction Patterns",
    "columns": [
      "Topic",
      "Pattern",
      "Exam use"
    ],
    "rows": [
      [
        "Torque on Current Loop",
        "tau = n I A B sin theta",
        "Angle is between area vector and magnetic field."
      ],
      [
        "Magnetic Dipole Moment of Loop",
        "m = n I A",
        "Area vector direction follows right-hand curl rule."
      ],
      [
        "Moving-Coil Galvanometer",
        "I = k theta/(n A B)",
        "Uniform radial field makes deflection proportional to current."
      ],
      [
        "Galvanometer to Ammeter",
        "S = Ig G/(I - Ig)",
        "Shunt is connected in parallel, not series."
      ],
      [
        "Galvanometer to Voltmeter",
        "R = V/Ig - G",
        "Voltmeter needs high resistance."
      ],
      [
        "Biot-Savart Law",
        "dB = mu0 I dl sin theta/(4 pi r^2)",
        "Direction is perpendicular to dl and r."
      ],
      [
        "Field Due to Long Straight Wire",
        "B = mu0 I/(2 pi r)",
        "Field decreases with distance from wire."
      ],
      [
        "Field at Centre of Circular Loop",
        "B = mu0 I/(2 R)",
        "For N turns multiply by N."
      ],
      [
        "Field on Axis of Circular Loop",
        "B = mu0 I R^2/(2(R^2+x^2)^(3/2))",
        "At x=0 it reduces to centre formula."
      ],
      [
        "Ampere Circuital Law",
        "integral B dl = mu0 I_enc",
        "Choose Amperian loop using symmetry."
      ]
    ]
  },
  {
    "title": "NEET vs JEE Question Patterns",
    "columns": [
      "Cluster",
      "NEET asks",
      "JEE asks"
    ],
    "rows": [
      [
        "Magnetic force",
        "Formula and NCERT statement from Lorentz force, right-hand rule and charged-particle motion.",
        "Numerical, graph, direction and limiting-case combinations"
      ],
      [
        "Current in field",
        "Formula and NCERT statement from Force on wires, parallel currents and torque on loops.",
        "Numerical, graph, direction and limiting-case combinations"
      ],
      [
        "Field sources",
        "Formula and NCERT statement from Biot-Savart law, Ampere law, solenoid and toroid.",
        "Numerical, graph, direction and limiting-case combinations"
      ],
      [
        "Instruments",
        "Formula and NCERT statement from Galvanometer, ammeter, voltmeter and exam diagrams.",
        "Numerical, graph, direction and limiting-case combinations"
      ]
    ]
  }
]

export const memoryHooks = [
  "Fleming/right-hand rule: thumb-force, fingers-field, middle-current.",
  "Magnetic force is sideways, so it changes direction but not speed.",
  "Long wire field falls as 1/r.",
  "Solenoid field grows with turns per metre.",
  "Parallel currents attract."
]

export const topFormulas = [
  "F = q v B sin theta",
  "F = q(v x B)",
  "r = m v/(q B)",
  "T = 2 pi m/(q B)",
  "f = q B/(2 pi m)",
  "F = B I l sin theta",
  "F/l = mu0 I1 I2/(2 pi d)",
  "tau = n I A B sin theta",
  "m = n I A",
  "I = k theta/(n A B)",
  "S = Ig G/(I - Ig)",
  "R = V/Ig - G",
  "dB = mu0 I dl sin theta/(4 pi r^2)",
  "B = mu0 I/(2 pi r)",
  "B = mu0 I/(2 R)",
  "B = mu0 n I",
  "B = mu0 N I/(2 pi r)"
]

export const topConcepts = [
  "Magnetic Field Basics: Moving charges and currents produce magnetic effects described by field B.",
  "Lorentz Force: A charge moving in magnetic field experiences force perpendicular to both v and B.",
  "Right-Hand Rule: The direction of magnetic force follows the vector product q(v x B).",
  "Motion in Uniform Magnetic Field: A charged particle moving perpendicular to B performs circular motion.",
  "Time Period in Magnetic Field: The period of circular motion in uniform B is independent of speed.",
  "Cyclotron: A cyclotron accelerates charged particles using magnetic field and alternating electric field.",
  "Velocity Selector: Crossed electric and magnetic fields select particles of one speed.",
  "Force on Current-Carrying Conductor: A wire carrying current in magnetic field experiences force.",
  "Force Between Parallel Currents: Two long parallel current-carrying wires exert magnetic force on each other.",
  "Definition of Ampere: Ampere is linked with force between two long parallel conductors.",
  "Torque on Current Loop: A current loop in magnetic field experiences torque.",
  "Magnetic Dipole Moment of Loop: A current loop behaves like a magnetic dipole.",
  "Moving-Coil Galvanometer: A galvanometer converts small current into measurable deflection.",
  "Galvanometer to Ammeter: A low-resistance shunt converts galvanometer into ammeter.",
  "Galvanometer to Voltmeter: A high series resistance converts galvanometer into voltmeter.",
  "Biot-Savart Law: Small current element produces magnetic field proportional to I dl sin theta/r^2.",
  "Field Due to Long Straight Wire: Magnetic field around a long straight wire is circular.",
  "Field at Centre of Circular Loop: A circular current loop produces field along its axis.",
  "Field on Axis of Circular Loop: Field on loop axis decreases with distance.",
  "Ampere Circuital Law: Line integral of magnetic field around closed path equals mu0 times enclosed current."
]

export const topTraps = [
  "B is a vector; do not treat it as only a scalar number.",
  "Force is zero when v is parallel to B.",
  "For negative charge, force direction reverses.",
  "Magnetic force does no work; speed remains constant.",
  "Do not put v in the final time period.",
  "Relativistic mass change is outside basic NCERT formula.",
  "Selected particle moves undeviated only when forces balance.",
  "Use current direction, not electron drift direction.",
  "Same direction currents attract; opposite direction currents repel.",
  "This is a definition-style NCERT fact.",
  "Angle is between area vector and magnetic field.",
  "Area vector direction follows right-hand curl rule.",
  "Uniform radial field makes deflection proportional to current.",
  "Shunt is connected in parallel, not series.",
  "Voltmeter needs high resistance."
]

export const topDiagrams = [
  "Magnetic Field Basics Visual",
  "Lorentz Force Visual",
  "Right-Hand Rule Visual",
  "Motion in Uniform Magnetic Field Visual",
  "Time Period in Magnetic Field Visual",
  "Cyclotron Visual",
  "Velocity Selector Visual",
  "Force on Current-Carrying Conductor Visual",
  "Force Between Parallel Currents Visual",
  "Definition of Ampere Visual"
]

export const graphPatterns = [
  "Magnetic Field Basics: graph/variation follows B = F/(q v sin theta).",
  "Lorentz Force: graph/variation follows F = q v B sin theta.",
  "Right-Hand Rule: graph/variation follows F = q(v x B).",
  "Motion in Uniform Magnetic Field: graph/variation follows r = m v/(q B).",
  "Time Period in Magnetic Field: graph/variation follows T = 2 pi m/(q B).",
  "Cyclotron: graph/variation follows f = q B/(2 pi m).",
  "Velocity Selector: graph/variation follows v = E/B.",
  "Force on Current-Carrying Conductor: graph/variation follows F = B I l sin theta.",
  "Force Between Parallel Currents: graph/variation follows F/l = mu0 I1 I2/(2 pi d).",
  "Definition of Ampere: graph/variation follows F/l = 2 x 10^-7 N m^-1."
]

export const questionTypes = [
  "Direct formula MCQ",
  "Direction/phase conceptual",
  "Graph interpretation",
  "Ratio numerical",
  "Statement correction",
  "Assertion-reason",
  "Integer answer",
  "Diagram labelling",
  "Case-based reasoning",
  "Limiting-case analysis"
]

export const revisionPlans = {
  "thirtyMinute": [
    "0-5 min: read formula sheet and units.",
    "5-10 min: redraw top diagrams.",
    "10-17 min: solve five direct MCQs and five numericals.",
    "17-24 min: revise traps and graph patterns.",
    "24-30 min: attempt mixed assertion/integer questions."
  ],
  "lastDay": [
    "Revise NCERT line alerts.",
    "Write derivation final formulas once.",
    "Review graph and direction rules.",
    "Solve one mixed practice set.",
    "Stop heavy new learning."
  ],
  "examHall": [
    "Draw a quick diagram.",
    "Write knowns in SI units.",
    "Choose the law with its condition.",
    "Keep signs/angles visible.",
    "Check dimensions and limiting case."
  ]
}

export const finalChecklist = [
  "I can explain, draw and solve Magnetic Field Basics.",
  "I can explain, draw and solve Lorentz Force.",
  "I can explain, draw and solve Right-Hand Rule.",
  "I can explain, draw and solve Motion in Uniform Magnetic Field.",
  "I can explain, draw and solve Time Period in Magnetic Field.",
  "I can explain, draw and solve Cyclotron.",
  "I can explain, draw and solve Velocity Selector.",
  "I can explain, draw and solve Force on Current-Carrying Conductor.",
  "I can explain, draw and solve Force Between Parallel Currents.",
  "I can explain, draw and solve Definition of Ampere.",
  "I can explain, draw and solve Torque on Current Loop.",
  "I can explain, draw and solve Magnetic Dipole Moment of Loop."
]
