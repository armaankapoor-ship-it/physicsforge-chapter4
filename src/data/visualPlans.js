export const visualPlans = [
  {
    "id": "lorentz-force-1",
    "title": "Magnetic Field Basics Visual",
    "category": "Diagram",
    "diagramType": "lorentz-force",
    "shows": "A self-made SVG visual for Magnetic Field Basics showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "B",
      "F",
      "q",
      "v",
      "sin",
      "theta"
    ],
    "concept": "Moving charges and currents produce magnetic effects described by field B.",
    "removesConfusion": "B is a vector; do not treat it as only a scalar number.",
    "manual": "Draw the main object, add direction arrows, label variables, then write B = F/(q v sin theta) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"lorentz-force\" draws this with free SVG primitives inside React."
  },
  {
    "id": "velocity-selector-2",
    "title": "Lorentz Force Visual",
    "category": "Diagram",
    "diagramType": "velocity-selector",
    "shows": "A self-made SVG visual for Lorentz Force showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "F",
      "q",
      "v",
      "B",
      "sin",
      "theta"
    ],
    "concept": "A charge moving in magnetic field experiences force perpendicular to both v and B.",
    "removesConfusion": "Force is zero when v is parallel to B.",
    "manual": "Draw the main object, add direction arrows, label variables, then write F = q v B sin theta below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"velocity-selector\" draws this with free SVG primitives inside React."
  },
  {
    "id": "cyclotron-radius-3",
    "title": "Right-Hand Rule Visual",
    "category": "Diagram",
    "diagramType": "cyclotron-radius",
    "shows": "A self-made SVG visual for Right-Hand Rule showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "F",
      "q",
      "v",
      "x",
      "B"
    ],
    "concept": "The direction of magnetic force follows the vector product q(v x B).",
    "removesConfusion": "For negative charge, force direction reverses.",
    "manual": "Draw the main object, add direction arrows, label variables, then write F = q(v x B) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"cyclotron-radius\" draws this with free SVG primitives inside React."
  },
  {
    "id": "wire-force-4",
    "title": "Motion in Uniform Magnetic Field Visual",
    "category": "Diagram",
    "diagramType": "wire-force",
    "shows": "A self-made SVG visual for Motion in Uniform Magnetic Field showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "r",
      "m",
      "v",
      "q",
      "B"
    ],
    "concept": "A charged particle moving perpendicular to B performs circular motion.",
    "removesConfusion": "Magnetic force does no work; speed remains constant.",
    "manual": "Draw the main object, add direction arrows, label variables, then write r = m v/(q B) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"wire-force\" draws this with free SVG primitives inside React."
  },
  {
    "id": "parallel-wire-force-5",
    "title": "Time Period in Magnetic Field Visual",
    "category": "Diagram",
    "diagramType": "parallel-wire-force",
    "shows": "A self-made SVG visual for Time Period in Magnetic Field showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "T",
      "2",
      "pi",
      "m",
      "q",
      "B"
    ],
    "concept": "The period of circular motion in uniform B is independent of speed.",
    "removesConfusion": "Do not put v in the final time period.",
    "manual": "Draw the main object, add direction arrows, label variables, then write T = 2 pi m/(q B) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"parallel-wire-force\" draws this with free SVG primitives inside React."
  },
  {
    "id": "coil-torque-6",
    "title": "Cyclotron Visual",
    "category": "Diagram",
    "diagramType": "coil-torque",
    "shows": "A self-made SVG visual for Cyclotron showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "f",
      "q",
      "B",
      "2",
      "pi",
      "m"
    ],
    "concept": "A cyclotron accelerates charged particles using magnetic field and alternating electric field.",
    "removesConfusion": "Relativistic mass change is outside basic NCERT formula.",
    "manual": "Draw the main object, add direction arrows, label variables, then write f = q B/(2 pi m) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"coil-torque\" draws this with free SVG primitives inside React."
  },
  {
    "id": "galvanometer-7",
    "title": "Velocity Selector Visual",
    "category": "Diagram",
    "diagramType": "galvanometer",
    "shows": "A self-made SVG visual for Velocity Selector showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "v",
      "E",
      "B"
    ],
    "concept": "Crossed electric and magnetic fields select particles of one speed.",
    "removesConfusion": "Selected particle moves undeviated only when forces balance.",
    "manual": "Draw the main object, add direction arrows, label variables, then write v = E/B below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"galvanometer\" draws this with free SVG primitives inside React."
  },
  {
    "id": "biot-savart-wire-8",
    "title": "Force on Current-Carrying Conductor Visual",
    "category": "Diagram",
    "diagramType": "biot-savart-wire",
    "shows": "A self-made SVG visual for Force on Current-Carrying Conductor showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "F",
      "B",
      "I",
      "l",
      "sin",
      "theta"
    ],
    "concept": "A wire carrying current in magnetic field experiences force.",
    "removesConfusion": "Use current direction, not electron drift direction.",
    "manual": "Draw the main object, add direction arrows, label variables, then write F = B I l sin theta below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"biot-savart-wire\" draws this with free SVG primitives inside React."
  },
  {
    "id": "loop-field-9",
    "title": "Force Between Parallel Currents Visual",
    "category": "Diagram",
    "diagramType": "loop-field",
    "shows": "A self-made SVG visual for Force Between Parallel Currents showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "F",
      "l",
      "mu0",
      "I1",
      "I2",
      "2"
    ],
    "concept": "Two long parallel current-carrying wires exert magnetic force on each other.",
    "removesConfusion": "Same direction currents attract; opposite direction currents repel.",
    "manual": "Draw the main object, add direction arrows, label variables, then write F/l = mu0 I1 I2/(2 pi d) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"loop-field\" draws this with free SVG primitives inside React."
  },
  {
    "id": "ampere-law-10",
    "title": "Definition of Ampere Visual",
    "category": "Diagram",
    "diagramType": "ampere-law",
    "shows": "A self-made SVG visual for Definition of Ampere showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "F",
      "l",
      "2",
      "x",
      "10",
      "7"
    ],
    "concept": "Ampere is linked with force between two long parallel conductors.",
    "removesConfusion": "This is a definition-style NCERT fact.",
    "manual": "Draw the main object, add direction arrows, label variables, then write F/l = 2 x 10^-7 N m^-1 below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"ampere-law\" draws this with free SVG primitives inside React."
  },
  {
    "id": "solenoid-11",
    "title": "Torque on Current Loop Visual",
    "category": "Diagram",
    "diagramType": "solenoid",
    "shows": "A self-made SVG visual for Torque on Current Loop showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "tau",
      "n",
      "I",
      "A",
      "B",
      "sin"
    ],
    "concept": "A current loop in magnetic field experiences torque.",
    "removesConfusion": "Angle is between area vector and magnetic field.",
    "manual": "Draw the main object, add direction arrows, label variables, then write tau = n I A B sin theta below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"solenoid\" draws this with free SVG primitives inside React."
  },
  {
    "id": "toroid-12",
    "title": "Magnetic Dipole Moment of Loop Visual",
    "category": "Diagram",
    "diagramType": "toroid",
    "shows": "A self-made SVG visual for Magnetic Dipole Moment of Loop showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "m",
      "n",
      "I",
      "A"
    ],
    "concept": "A current loop behaves like a magnetic dipole.",
    "removesConfusion": "Area vector direction follows right-hand curl rule.",
    "manual": "Draw the main object, add direction arrows, label variables, then write m = n I A below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"toroid\" draws this with free SVG primitives inside React."
  },
  {
    "id": "magnetic-dipole-13",
    "title": "Moving-Coil Galvanometer Visual",
    "category": "Diagram",
    "diagramType": "magnetic-dipole",
    "shows": "A self-made SVG visual for Moving-Coil Galvanometer showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "I",
      "k",
      "theta",
      "n",
      "A",
      "B"
    ],
    "concept": "A galvanometer converts small current into measurable deflection.",
    "removesConfusion": "Uniform radial field makes deflection proportional to current.",
    "manual": "Draw the main object, add direction arrows, label variables, then write I = k theta/(n A B) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"magnetic-dipole\" draws this with free SVG primitives inside React."
  },
  {
    "id": "graph-force-angle-14",
    "title": "Galvanometer to Ammeter Visual",
    "category": "Graph",
    "diagramType": "graph-force-angle",
    "shows": "A self-made SVG visual for Galvanometer to Ammeter showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "S",
      "Ig",
      "G",
      "I",
      "Ig"
    ],
    "concept": "A low-resistance shunt converts galvanometer into ammeter.",
    "removesConfusion": "Shunt is connected in parallel, not series.",
    "manual": "Draw the main object, add direction arrows, label variables, then write S = Ig G/(I - Ig) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"graph-force-angle\" draws this with free SVG primitives inside React."
  },
  {
    "id": "trap-map-15",
    "title": "Galvanometer to Voltmeter Visual",
    "category": "Infographic",
    "diagramType": "trap-map",
    "shows": "A self-made SVG visual for Galvanometer to Voltmeter showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "R",
      "V",
      "Ig",
      "G"
    ],
    "concept": "A high series resistance converts galvanometer into voltmeter.",
    "removesConfusion": "Voltmeter needs high resistance.",
    "manual": "Draw the main object, add direction arrows, label variables, then write R = V/Ig - G below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"trap-map\" draws this with free SVG primitives inside React."
  },
  {
    "id": "lorentz-force-16",
    "title": "Biot-Savart Law Visual",
    "category": "Diagram",
    "diagramType": "lorentz-force",
    "shows": "A self-made SVG visual for Biot-Savart Law showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "dB",
      "mu0",
      "I",
      "dl",
      "sin",
      "theta"
    ],
    "concept": "Small current element produces magnetic field proportional to I dl sin theta/r^2.",
    "removesConfusion": "Direction is perpendicular to dl and r.",
    "manual": "Draw the main object, add direction arrows, label variables, then write dB = mu0 I dl sin theta/(4 pi r^2) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"lorentz-force\" draws this with free SVG primitives inside React."
  },
  {
    "id": "velocity-selector-17",
    "title": "Field Due to Long Straight Wire Visual",
    "category": "Diagram",
    "diagramType": "velocity-selector",
    "shows": "A self-made SVG visual for Field Due to Long Straight Wire showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "B",
      "mu0",
      "I",
      "2",
      "pi",
      "r"
    ],
    "concept": "Magnetic field around a long straight wire is circular.",
    "removesConfusion": "Field decreases with distance from wire.",
    "manual": "Draw the main object, add direction arrows, label variables, then write B = mu0 I/(2 pi r) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"velocity-selector\" draws this with free SVG primitives inside React."
  },
  {
    "id": "cyclotron-radius-18",
    "title": "Field at Centre of Circular Loop Visual",
    "category": "Diagram",
    "diagramType": "cyclotron-radius",
    "shows": "A self-made SVG visual for Field at Centre of Circular Loop showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "B",
      "mu0",
      "I",
      "2",
      "R"
    ],
    "concept": "A circular current loop produces field along its axis.",
    "removesConfusion": "For N turns multiply by N.",
    "manual": "Draw the main object, add direction arrows, label variables, then write B = mu0 I/(2 R) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"cyclotron-radius\" draws this with free SVG primitives inside React."
  },
  {
    "id": "wire-force-19",
    "title": "Field on Axis of Circular Loop Visual",
    "category": "Diagram",
    "diagramType": "wire-force",
    "shows": "A self-made SVG visual for Field on Axis of Circular Loop showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "B",
      "mu0",
      "I",
      "R",
      "2",
      "2"
    ],
    "concept": "Field on loop axis decreases with distance.",
    "removesConfusion": "At x=0 it reduces to centre formula.",
    "manual": "Draw the main object, add direction arrows, label variables, then write B = mu0 I R^2/(2(R^2+x^2)^(3/2)) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"wire-force\" draws this with free SVG primitives inside React."
  },
  {
    "id": "parallel-wire-force-20",
    "title": "Ampere Circuital Law Visual",
    "category": "Diagram",
    "diagramType": "parallel-wire-force",
    "shows": "A self-made SVG visual for Ampere Circuital Law showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "integral",
      "B",
      "dl",
      "mu0",
      "I_enc"
    ],
    "concept": "Line integral of magnetic field around closed path equals mu0 times enclosed current.",
    "removesConfusion": "Choose Amperian loop using symmetry.",
    "manual": "Draw the main object, add direction arrows, label variables, then write integral B dl = mu0 I_enc below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"parallel-wire-force\" draws this with free SVG primitives inside React."
  },
  {
    "id": "coil-torque-21",
    "title": "Field Inside Solenoid Visual",
    "category": "Diagram",
    "diagramType": "coil-torque",
    "shows": "A self-made SVG visual for Field Inside Solenoid showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "B",
      "mu0",
      "n",
      "I"
    ],
    "concept": "A long solenoid has nearly uniform internal magnetic field.",
    "removesConfusion": "Outside field is small only for a long ideal solenoid.",
    "manual": "Draw the main object, add direction arrows, label variables, then write B = mu0 n I below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"coil-torque\" draws this with free SVG primitives inside React."
  },
  {
    "id": "galvanometer-22",
    "title": "Field Inside Toroid Visual",
    "category": "Diagram",
    "diagramType": "galvanometer",
    "shows": "A self-made SVG visual for Field Inside Toroid showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "B",
      "mu0",
      "N",
      "I",
      "2",
      "pi"
    ],
    "concept": "Magnetic field inside a toroid is confined along circular path.",
    "removesConfusion": "Outside ideal toroid field is nearly zero.",
    "manual": "Draw the main object, add direction arrows, label variables, then write B = mu0 N I/(2 pi r) below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"galvanometer\" draws this with free SVG primitives inside React."
  },
  {
    "id": "biot-savart-wire-23",
    "title": "Magnetic Field Lines Visual",
    "category": "Diagram",
    "diagramType": "biot-savart-wire",
    "shows": "A self-made SVG visual for Magnetic Field Lines showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "div",
      "B",
      "0"
    ],
    "concept": "Magnetic field lines form closed loops and never start/end like electric field lines.",
    "removesConfusion": "There are no isolated magnetic monopoles in NCERT.",
    "manual": "Draw the main object, add direction arrows, label variables, then write div B = 0 below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"biot-savart-wire\" draws this with free SVG primitives inside React."
  },
  {
    "id": "loop-field-24",
    "title": "Hall Effect Foundation Visual",
    "category": "Diagram",
    "diagramType": "loop-field",
    "shows": "A self-made SVG visual for Hall Effect Foundation showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "q",
      "v_d",
      "B",
      "q",
      "E_H"
    ],
    "concept": "A current-carrying conductor in magnetic field develops transverse potential difference.",
    "removesConfusion": "Hall voltage sign reveals carrier type.",
    "manual": "Draw the main object, add direction arrows, label variables, then write q v_d B = q E_H below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"loop-field\" draws this with free SVG primitives inside React."
  },
  {
    "id": "ampere-law-25",
    "title": "Magnetic Force Graphs Visual",
    "category": "Diagram",
    "diagramType": "ampere-law",
    "shows": "A self-made SVG visual for Magnetic Force Graphs showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "F",
      "proportional",
      "to",
      "sin",
      "theta"
    ],
    "concept": "Force-angle graph follows sine dependence.",
    "removesConfusion": "Maximum occurs at 90 degrees, not 180 degrees.",
    "manual": "Draw the main object, add direction arrows, label variables, then write F proportional to sin theta below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"ampere-law\" draws this with free SVG primitives inside React."
  },
  {
    "id": "solenoid-26",
    "title": "Formula Mastery Visual",
    "category": "Diagram",
    "diagramType": "solenoid",
    "shows": "A self-made SVG visual for Formula Mastery showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "F",
      "qvBsin",
      "theta",
      "B",
      "mu0I",
      "2pir"
    ],
    "concept": "Moving charges and current elements use vector products and right-hand rules.",
    "removesConfusion": "Most mistakes are direction or angle mistakes.",
    "manual": "Draw the main object, add direction arrows, label variables, then write F=qvBsin theta, B=mu0I/2pir below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"solenoid\" draws this with free SVG primitives inside React."
  },
  {
    "id": "toroid-27",
    "title": "Common Conceptual Traps Visual",
    "category": "Diagram",
    "diagramType": "toroid",
    "shows": "A self-made SVG visual for Common Conceptual Traps showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "check",
      "q",
      "sign",
      "angle",
      "connection"
    ],
    "concept": "Traps include negative charge direction, no work by magnetic force and wrong shunt/series connection.",
    "removesConfusion": "Magnetic force is not along magnetic field.",
    "manual": "Draw the main object, add direction arrows, label variables, then write check q sign, angle, connection below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"toroid\" draws this with free SVG primitives inside React."
  },
  {
    "id": "magnetic-dipole-28",
    "title": "Board Derivation Focus Visual",
    "category": "Diagram",
    "diagramType": "magnetic-dipole",
    "shows": "A self-made SVG visual for Board Derivation Focus showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "derive",
      "B",
      "tau",
      "shunt"
    ],
    "concept": "Boards emphasize Biot-Savart applications, Ampere law and galvanometer conversion.",
    "removesConfusion": "Write diagrams with directions before equations.",
    "manual": "Draw the main object, add direction arrows, label variables, then write derive B, tau, shunt below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"magnetic-dipole\" draws this with free SVG primitives inside React."
  },
  {
    "id": "graph-force-angle-29",
    "title": "JEE and NEET Graph Focus Visual",
    "category": "Graph",
    "diagramType": "graph-force-angle",
    "shows": "A self-made SVG visual for JEE and NEET Graph Focus showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "r",
      "mv",
      "qB",
      "T",
      "2pi",
      "m"
    ],
    "concept": "Competitive exams mix force, radius, time period, field graphs and instrument conversion.",
    "removesConfusion": "Period is independent of velocity.",
    "manual": "Draw the main object, add direction arrows, label variables, then write r=mv/qB, T=2pi m/qB below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"graph-force-angle\" draws this with free SVG primitives inside React."
  },
  {
    "id": "trap-map-30",
    "title": "Final Revision Section Visual",
    "category": "Infographic",
    "diagramType": "trap-map",
    "shows": "A self-made SVG visual for Final Revision Section showing labelled quantities, direction arrows and the key relation.",
    "labels": [
      "top",
      "formulas",
      "traps"
    ],
    "concept": "Final revision compresses force laws, field sources and instruments.",
    "removesConfusion": "Revise vector directions with every formula.",
    "manual": "Draw the main object, add direction arrows, label variables, then write top formulas + traps below the diagram.",
    "digital": "Use responsive SVG: axes, curves, arrows, coils, magnets, wave trains and text labels. No paid graphics are required.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"trap-map\" draws this with free SVG primitives inside React."
  }
]
