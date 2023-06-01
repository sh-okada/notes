from dataclasses import dataclass


@dataclass(eq=True, frozen=True)
class UserResponse:
    id: str
    name: str
