export const formulas = [
  {
    "id": "lorentz",
    "title": "Lorentz Force",
    "formula": "F = q v B sin theta",
    "display": "F = q v B sin theta",
    "symbols": [
      [
        "F",
        "magnetic force",
        "N"
      ],
      [
        "q",
        "charge",
        "C"
      ],
      [
        "v",
        "speed",
        "m s^-1"
      ],
      [
        "B",
        "magnetic field",
        "T"
      ],
      [
        "theta",
        "angle between v and B",
        "degree/radian"
      ]
    ],
    "meaning": "Magnetic force on moving charge.",
    "dimension": "C m s^-1 T = N",
    "graph": "F-theta graph is sine curve.",
    "trap": "Zero force for parallel motion.",
    "easyExample": "Easy example: identify symbols and substitute in F = q v B sin theta after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Magnetic force on moving charge.",
    "jeeExample": "JEE Main pattern: combine F = q v B sin theta with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Zero force for parallel motion."
  },
  {
    "id": "vector-force",
    "title": "Vector Form of Magnetic Force",
    "formula": "F = q(v x B)",
    "display": "F = q(v x B)",
    "symbols": [
      [
        "F",
        "force vector",
        "N"
      ],
      [
        "v",
        "velocity vector",
        "m s^-1"
      ],
      [
        "B",
        "magnetic field vector",
        "T"
      ]
    ],
    "meaning": "Force is perpendicular to velocity and magnetic field.",
    "dimension": "Vector product gives newton.",
    "graph": "Direction follows right-hand rule.",
    "trap": "Negative charge reverses direction.",
    "easyExample": "Easy example: identify symbols and substitute in F = q(v x B) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Force is perpendicular to velocity and magnetic field.",
    "jeeExample": "JEE Main pattern: combine F = q(v x B) with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Negative charge reverses direction."
  },
  {
    "id": "radius",
    "title": "Radius in Uniform B",
    "formula": "r = m v/(q B)",
    "display": "r = m v/(q B)",
    "symbols": [
      [
        "r",
        "radius",
        "m"
      ],
      [
        "m",
        "mass",
        "kg"
      ]
    ],
    "meaning": "Magnetic force provides centripetal force.",
    "dimension": "kg m s^-1/(C T)=m",
    "graph": "r grows with v and shrinks with B.",
    "trap": "Use speed perpendicular to B.",
    "easyExample": "Easy example: identify symbols and substitute in r = m v/(q B) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Magnetic force provides centripetal force.",
    "jeeExample": "JEE Main pattern: combine r = m v/(q B) with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Use speed perpendicular to B."
  },
  {
    "id": "period",
    "title": "Time Period in Magnetic Field",
    "formula": "T = 2 pi m/(q B)",
    "display": "T = 2 pi m/(q B)",
    "symbols": [
      [
        "T",
        "time period",
        "s"
      ]
    ],
    "meaning": "Period is independent of speed for non-relativistic motion.",
    "dimension": "kg/(C T)=s",
    "graph": "T-B graph is inverse.",
    "trap": "Do not include velocity.",
    "easyExample": "Easy example: identify symbols and substitute in T = 2 pi m/(q B) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Period is independent of speed for non-relativistic motion.",
    "jeeExample": "JEE Main pattern: combine T = 2 pi m/(q B) with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Do not include velocity."
  },
  {
    "id": "cyclotron",
    "title": "Cyclotron Frequency",
    "formula": "f = q B/(2 pi m)",
    "display": "f = q B/(2 pi m)",
    "symbols": [
      [
        "f",
        "frequency",
        "Hz"
      ]
    ],
    "meaning": "Frequency of circular motion in B.",
    "dimension": "C T/kg = s^-1",
    "graph": "f grows with B.",
    "trap": "Basic formula ignores relativistic correction.",
    "easyExample": "Easy example: identify symbols and substitute in f = q B/(2 pi m) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Frequency of circular motion in B.",
    "jeeExample": "JEE Main pattern: combine f = q B/(2 pi m) with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Basic formula ignores relativistic correction."
  },
  {
    "id": "wire-force",
    "title": "Force on Wire",
    "formula": "F = B I l sin theta",
    "display": "F = B I l sin theta",
    "symbols": [
      [
        "I",
        "current",
        "A"
      ],
      [
        "l",
        "wire length",
        "m"
      ]
    ],
    "meaning": "Magnetic force on current-carrying conductor.",
    "dimension": "T A m = N",
    "graph": "F-angle is sine curve.",
    "trap": "Use conventional current.",
    "easyExample": "Easy example: identify symbols and substitute in F = B I l sin theta after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Magnetic force on current-carrying conductor.",
    "jeeExample": "JEE Main pattern: combine F = B I l sin theta with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Use conventional current."
  },
  {
    "id": "parallel-wires",
    "title": "Force Between Parallel Wires",
    "formula": "F/l = mu0 I1 I2/(2 pi d)",
    "display": "F/l = mu0 I1 I2/(2 pi d)",
    "symbols": [
      [
        "d",
        "separation",
        "m"
      ],
      [
        "mu0",
        "permeability",
        "T m A^-1"
      ]
    ],
    "meaning": "Parallel currents interact magnetically.",
    "dimension": "N m^-1",
    "graph": "Force decreases as 1/d.",
    "trap": "Same currents attract.",
    "easyExample": "Easy example: identify symbols and substitute in F/l = mu0 I1 I2/(2 pi d) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Parallel currents interact magnetically.",
    "jeeExample": "JEE Main pattern: combine F/l = mu0 I1 I2/(2 pi d) with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Same currents attract."
  },
  {
    "id": "loop-torque",
    "title": "Torque on Current Loop",
    "formula": "tau = n I A B sin theta",
    "display": "tau = n I A B sin theta",
    "symbols": [
      [
        "n",
        "turns",
        "unitless"
      ],
      [
        "A",
        "area",
        "m^2"
      ]
    ],
    "meaning": "Current loop has magnetic torque.",
    "dimension": "A m^2 T = N m",
    "graph": "tau is maximum at 90 degrees.",
    "trap": "Angle is with area vector.",
    "easyExample": "Easy example: identify symbols and substitute in tau = n I A B sin theta after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Current loop has magnetic torque.",
    "jeeExample": "JEE Main pattern: combine tau = n I A B sin theta with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Angle is with area vector."
  },
  {
    "id": "dipole-loop",
    "title": "Magnetic Moment of Loop",
    "formula": "m = n I A",
    "display": "m = n I A",
    "symbols": [
      [
        "m",
        "magnetic dipole moment",
        "A m^2"
      ]
    ],
    "meaning": "Current loop acts like a dipole.",
    "dimension": "A m^2",
    "graph": "m grows with turns/current/area.",
    "trap": "Area vector direction matters.",
    "easyExample": "Easy example: identify symbols and substitute in m = n I A after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Current loop acts like a dipole.",
    "jeeExample": "JEE Main pattern: combine m = n I A with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Area vector direction matters."
  },
  {
    "id": "galvanometer",
    "title": "Galvanometer Current",
    "formula": "I = k theta/(n A B)",
    "display": "I = k theta/(n A B)",
    "symbols": [
      [
        "k",
        "torsion constant",
        "N m rad^-1"
      ],
      [
        "theta",
        "deflection",
        "radian"
      ]
    ],
    "meaning": "Deflection measures current.",
    "dimension": "A",
    "graph": "I-theta straight line.",
    "trap": "Radial field gives linear scale.",
    "easyExample": "Easy example: identify symbols and substitute in I = k theta/(n A B) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Deflection measures current.",
    "jeeExample": "JEE Main pattern: combine I = k theta/(n A B) with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Radial field gives linear scale."
  },
  {
    "id": "shunt",
    "title": "Ammeter Shunt",
    "formula": "S = Ig G/(I - Ig)",
    "display": "S = Ig G/(I - Ig)",
    "symbols": [
      [
        "S",
        "shunt resistance",
        "ohm"
      ],
      [
        "Ig",
        "galvanometer current",
        "A"
      ],
      [
        "G",
        "galvanometer resistance",
        "ohm"
      ]
    ],
    "meaning": "Low parallel resistance converts galvanometer to ammeter.",
    "dimension": "ohm",
    "graph": "S is small.",
    "trap": "Never put shunt in series.",
    "easyExample": "Easy example: identify symbols and substitute in S = Ig G/(I - Ig) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Low parallel resistance converts galvanometer to ammeter.",
    "jeeExample": "JEE Main pattern: combine S = Ig G/(I - Ig) with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Never put shunt in series."
  },
  {
    "id": "voltmeter",
    "title": "Voltmeter Series Resistance",
    "formula": "R = V/Ig - G",
    "display": "R = V/Ig - G",
    "symbols": [
      [
        "R",
        "series resistance",
        "ohm"
      ],
      [
        "V",
        "range voltage",
        "V"
      ]
    ],
    "meaning": "High series resistance converts galvanometer to voltmeter.",
    "dimension": "ohm",
    "graph": "R large gives high range.",
    "trap": "Voltmeter is connected in parallel externally.",
    "easyExample": "Easy example: identify symbols and substitute in R = V/Ig - G after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on High series resistance converts galvanometer to voltmeter.",
    "jeeExample": "JEE Main pattern: combine R = V/Ig - G with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Voltmeter is connected in parallel externally."
  },
  {
    "id": "biot-savart",
    "title": "Biot-Savart Law",
    "formula": "dB = mu0 I dl sin theta/(4 pi r^2)",
    "display": "dB = mu0 I dl sin theta/(4 pi r^2)",
    "symbols": [
      [
        "dB",
        "field element",
        "T"
      ],
      [
        "dl",
        "current element",
        "m"
      ],
      [
        "r",
        "distance",
        "m"
      ]
    ],
    "meaning": "A current element produces magnetic field.",
    "dimension": "T",
    "graph": "Field falls as 1/r^2 for element.",
    "trap": "Direction is cross product.",
    "easyExample": "Easy example: identify symbols and substitute in dB = mu0 I dl sin theta/(4 pi r^2) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on A current element produces magnetic field.",
    "jeeExample": "JEE Main pattern: combine dB = mu0 I dl sin theta/(4 pi r^2) with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Direction is cross product."
  },
  {
    "id": "long-wire",
    "title": "Long Wire Field",
    "formula": "B = mu0 I/(2 pi r)",
    "display": "B = mu0 I/(2 pi r)",
    "symbols": [
      [
        "r",
        "distance from wire",
        "m"
      ]
    ],
    "meaning": "Field around long wire is circular.",
    "dimension": "T",
    "graph": "B-r graph is inverse.",
    "trap": "Valid for long straight wire.",
    "easyExample": "Easy example: identify symbols and substitute in B = mu0 I/(2 pi r) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Field around long wire is circular.",
    "jeeExample": "JEE Main pattern: combine B = mu0 I/(2 pi r) with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Valid for long straight wire."
  },
  {
    "id": "loop-center",
    "title": "Circular Loop Centre Field",
    "formula": "B = mu0 I/(2 R)",
    "display": "B = mu0 I/(2 R)",
    "symbols": [
      [
        "R",
        "loop radius",
        "m"
      ]
    ],
    "meaning": "Field at centre of loop.",
    "dimension": "T",
    "graph": "Smaller radius gives stronger field.",
    "trap": "Multiply by N turns.",
    "easyExample": "Easy example: identify symbols and substitute in B = mu0 I/(2 R) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Field at centre of loop.",
    "jeeExample": "JEE Main pattern: combine B = mu0 I/(2 R) with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Multiply by N turns."
  },
  {
    "id": "solenoid",
    "title": "Solenoid Field",
    "formula": "B = mu0 n I",
    "display": "B = mu0 n I",
    "symbols": [
      [
        "n",
        "turns per metre",
        "m^-1"
      ]
    ],
    "meaning": "Long solenoid has uniform inside field.",
    "dimension": "T",
    "graph": "B-I graph is straight.",
    "trap": "End effects ignored.",
    "easyExample": "Easy example: identify symbols and substitute in B = mu0 n I after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Long solenoid has uniform inside field.",
    "jeeExample": "JEE Main pattern: combine B = mu0 n I with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: End effects ignored."
  },
  {
    "id": "toroid",
    "title": "Toroid Field",
    "formula": "B = mu0 N I/(2 pi r)",
    "display": "B = mu0 N I/(2 pi r)",
    "symbols": [
      [
        "N",
        "total turns",
        "unitless"
      ],
      [
        "r",
        "mean radius",
        "m"
      ]
    ],
    "meaning": "Toroid confines magnetic field.",
    "dimension": "T",
    "graph": "B decreases with radius inside core.",
    "trap": "Outside ideal toroid field nearly zero.",
    "easyExample": "Easy example: identify symbols and substitute in B = mu0 N I/(2 pi r) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction based on Toroid confines magnetic field.",
    "jeeExample": "JEE Main pattern: combine B = mu0 N I/(2 pi r) with a graph, ratio, sign convention or limiting case.",
    "twist": "Conceptual twist: Outside ideal toroid field nearly zero."
  }
]

export const formulaGroups = [
  {
    "title": "Magnetic force",
    "formulas": [
      "lorentz",
      "vector-force",
      "radius",
      "period",
      "cyclotron"
    ]
  },
  {
    "title": "Current in field",
    "formulas": [
      "wire-force",
      "parallel-wires",
      "loop-torque",
      "dipole-loop",
      "galvanometer"
    ]
  },
  {
    "title": "Field sources",
    "formulas": [
      "shunt",
      "voltmeter",
      "biot-savart",
      "long-wire",
      "loop-center"
    ]
  },
  {
    "title": "Instruments",
    "formulas": [
      "solenoid",
      "toroid"
    ]
  }
]

