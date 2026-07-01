export const models3d = {
  "repo": "physicsforge-chapter4",
  "chapterNumber": 4,
  "chapterName": "Moving Charges and Magnetism",
  "shortName": "Moving Charges",
  "count": 20,
  "models": [
    {
      "id": "model-01",
      "number": 1,
      "title": "Charge in Magnetic Field",
      "kind": "magnetic",
      "formula": "F = qvB sin theta",
      "concept": "A moving charge bends when velocity has component perpendicular to B.",
      "exam": "Magnetic force does no work because it is perpendicular to velocity.",
      "labels": [
        "velocity",
        "B field",
        "force"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-02",
      "number": 2,
      "title": "Circular Motion Radius",
      "kind": "atom",
      "formula": "r = mv/qB",
      "concept": "The magnetic field supplies centripetal force.",
      "exam": "Radius increases with speed and mass.",
      "labels": [
        "orbit",
        "charge",
        "B field"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-03",
      "number": 3,
      "title": "Velocity Selector",
      "kind": "capacitor",
      "formula": "v = E/B",
      "concept": "Crossed electric and magnetic fields select a single speed.",
      "exam": "Selected particles move undeflected.",
      "labels": [
        "E field",
        "B field",
        "straight path"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-04",
      "number": 4,
      "title": "Cyclotron Spiral",
      "kind": "atom",
      "formula": "f = qB/(2 pi m)",
      "concept": "Particles gain energy each time they cross the gap.",
      "exam": "Frequency is independent of speed in non-relativistic case.",
      "labels": [
        "dees",
        "gap",
        "spiral path"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-05",
      "number": 5,
      "title": "Current-Carrying Wire Field",
      "kind": "magnetic",
      "formula": "B = mu0 I/(2 pi r)",
      "concept": "Circular magnetic field lines surround a straight wire.",
      "exam": "Use right-hand thumb rule for direction.",
      "labels": [
        "wire",
        "field circles",
        "current"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-06",
      "number": 6,
      "title": "Force on Current Wire",
      "kind": "circuit",
      "formula": "F = BIL sin theta",
      "concept": "A current-carrying wire in magnetic field experiences force.",
      "exam": "Direction follows Fleming left hand rule.",
      "labels": [
        "current",
        "B field",
        "force"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-07",
      "number": 7,
      "title": "Torque on Current Loop",
      "kind": "phasor",
      "formula": "tau = NIAB sin theta",
      "concept": "A current loop rotates in magnetic field.",
      "exam": "Torque is maximum when plane is parallel to B.",
      "labels": [
        "loop",
        "area vector",
        "torque"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-08",
      "number": 8,
      "title": "Moving Coil Galvanometer",
      "kind": "coil",
      "formula": "theta proportional I",
      "concept": "Deflection is proportional to current for radial magnetic field.",
      "exam": "Restoring torque balances magnetic torque.",
      "labels": [
        "coil",
        "spring",
        "pointer"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-09",
      "number": 9,
      "title": "Ammeter Conversion",
      "kind": "circuit",
      "formula": "S = IgG/(I-Ig)",
      "concept": "A low shunt resistance bypasses most current.",
      "exam": "Ammeter must have low resistance.",
      "labels": [
        "galvanometer",
        "shunt",
        "load current"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-10",
      "number": 10,
      "title": "Voltmeter Conversion",
      "kind": "circuit",
      "formula": "R = V/Ig - G",
      "concept": "A high series resistance limits current.",
      "exam": "Voltmeter must have high resistance.",
      "labels": [
        "series R",
        "meter",
        "terminals"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-11",
      "number": 11,
      "title": "Solenoid Field Tunnel",
      "kind": "coil",
      "formula": "B = mu0 n I",
      "concept": "Inside a long solenoid, field is nearly uniform.",
      "exam": "Outside field is weak for a long solenoid.",
      "labels": [
        "turns",
        "uniform B",
        "axis"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-12",
      "number": 12,
      "title": "Toroid Magnetic Field",
      "kind": "transformer",
      "formula": "B = mu0NI/(2 pi r)",
      "concept": "Field is confined mostly inside the toroidal core.",
      "exam": "Outside ideal toroid field is nearly zero.",
      "labels": [
        "toroid",
        "core",
        "field path"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-13",
      "number": 13,
      "title": "Biot Savart Segment",
      "kind": "magnetic",
      "formula": "dB = mu0 I dl sin theta/(4 pi r^2)",
      "concept": "A small current element contributes a magnetic field.",
      "exam": "Vector direction is from cross product dl x r.",
      "labels": [
        "current element",
        "point P",
        "dB"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-14",
      "number": 14,
      "title": "Ampere Loop",
      "kind": "magnetic",
      "formula": "integral B dl = mu0 I",
      "concept": "Symmetry turns Ampere law into a usable formula.",
      "exam": "Choose Amperian loop matching symmetry.",
      "labels": [
        "loop",
        "enclosed I",
        "B tangent"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-15",
      "number": 15,
      "title": "Magnetic Dipole Moment",
      "kind": "dipole",
      "formula": "m = IA",
      "concept": "A current loop behaves like a magnetic dipole.",
      "exam": "Magnetic moment direction is area vector direction.",
      "labels": [
        "current loop",
        "m vector",
        "poles"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-16",
      "number": 16,
      "title": "Parallel Currents Force",
      "kind": "circuit",
      "formula": "F/L = mu0 I1I2/(2 pi d)",
      "concept": "Parallel currents attract and anti-parallel currents repel.",
      "exam": "This is often tested conceptually.",
      "labels": [
        "wire 1",
        "wire 2",
        "force"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-17",
      "number": 17,
      "title": "Mass Spectrometer Bend",
      "kind": "atom",
      "formula": "r = mv/qB",
      "concept": "Different masses follow different radii in same B field.",
      "exam": "Larger mass gives larger radius for same speed and charge.",
      "labels": [
        "ion beam",
        "B field",
        "detector"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-18",
      "number": 18,
      "title": "Helmholtz Coil Field",
      "kind": "coil",
      "formula": "uniform central field",
      "concept": "Two coils can create a nearly uniform central magnetic field.",
      "exam": "Useful for controlled magnetic field experiments.",
      "labels": [
        "coil A",
        "coil B",
        "central B"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-19",
      "number": 19,
      "title": "Magnetic Field Vector Map",
      "kind": "magnetic",
      "formula": "B vector field",
      "concept": "Field arrows show direction and magnitude in space.",
      "exam": "Field lines form closed loops.",
      "labels": [
        "north",
        "south",
        "closed lines"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-20",
      "number": 20,
      "title": "Lorentz Force 3D Axes",
      "kind": "phasor",
      "formula": "F = q(E + v x B)",
      "concept": "Electric and magnetic forces combine vectorially.",
      "exam": "Magnetic part depends on velocity direction.",
      "labels": [
        "E",
        "v",
        "v x B"
      ],
      "color": "#7c3aed"
    }
  ]
}
