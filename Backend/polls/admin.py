from django.contrib import admin
from polls.models import Question, Choice, Game, Player

# Register your models here.
admin.site.register(Question)
admin.site.register(Choice)
admin.site.register(Game)
admin.site.register(Player)