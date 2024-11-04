from ninja import NinjaAPI
from polls.models import Choice, Question, Game, Player
from polls.schemas import ChoiceSchema, QuestionSchema, AddQuestionSchema, PlayerSchema, GameSchema, AddGameSchema
from django.utils import timezone

api = NinjaAPI()

# --- QUESTION ---
@api.post("/create_question", response=QuestionSchema)
def add_question(request, add_question: AddQuestionSchema):
    question = Question.objects.create(
        question_text=add_question.question_text,
        pub_date=timezone.now()
        )

    for choice in add_question.choices:
        Choice.objects.create(
            choice_text=choice,
            question=question
        )

    return question

@api.get("/question/{question_id}", response=QuestionSchema)
def get_question(request, question_id: int):
    return Question.objects.get(pk=question_id)

@api.delete("/delete_question/{question_id}", response=None)
def delete_question(request, question_id: int):
    Question.objects.delete(pk=question_id)

# --- GAME ---
@api.post("/start_game", response=GameSchema)
def start_game(request, add_game: AddGameSchema):
    game = Game.objects.create(
        name=add_game.name
    )

    for player in add_game.players:
        Player.objects.create(
            name=player,
            game=game
        )

    return game

@api.get("/game/{game_id}", response=GameSchema)
def get_game(request, game_id: int):
    return Game.objects.get(pk=game_id)