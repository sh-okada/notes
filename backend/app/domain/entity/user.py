from dataclasses import dataclass


@dataclass(eq=True, frozen=True)
class User:
    id: str
    name: str
    password: str
