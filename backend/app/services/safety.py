# Dummy conflict rules (you can expand)
CONFLICTS = [
    ("paracetamol", "alcohol"),
    ("aspirin", "ibuprofen")
]

def check_conflicts(medicine_list):
    warnings = []

    names = [m.lower() for m in medicine_list]

    for a, b in CONFLICTS:
        if a in names and b in names:
            warnings.append(f"Avoid taking {a} with {b}")

    return warnings