# Procedure Screenshots

Store procedure screenshots following this convention:

public/images/<department>/<procedure-slug>-step-<NN>.png

Examples:
- public/images/bedlink/check-new-reservations-step-01.png
- public/images/spinal/importing-reservations-into-spinal-step-02.png
- public/images/front-desk/guest-check-in-step-03.png
- public/images/cleaning/morning-hostel-preparation-step-01.png
- public/images/inmigration/tm30-guest-step-01.png

Rules:
- <department>: bedlink, spinal, front-desk, cleaning, inmigration
- <procedure-slug>: the procedure slug from navigation.ts
- <NN>: two-digit step number (01, 02, ...)
- Use descriptive, lowercase, hyphenated filenames.
- Multiple screenshots per step: append a suffix, e.g. ...-step-01a.png
- Missing files automatically show a "Screenshot pending" placeholder.
