from dataclasses import dataclass


@dataclass(eq=True, frozen=True)
class StrengthResponse:
    strength: str
